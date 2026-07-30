import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

type JwtPayload = {
	userId: string;
	role: 'user' | 'admin';
};

export const authMiddleware = (
	req: Request,
	res: Response,
	next: NextFunction,
): void => {
	const authHeader = req.headers.authorization;

	if (!authHeader?.startsWith('Bearer ')) {
		res.status(401).json({
			success: false,
			message: 'Authorization token is missing.',
		});
		return;
	}

	const token = authHeader.substring(7);

	const jwtSecret = process.env.JWT_SECRET;

	if (!jwtSecret) {
		throw new Error('JWT_SECRET is not defined.');
	}

	try {
		const decoded = jwt.verify(token, jwtSecret) as JwtPayload;

		req.userId = decoded.userId;
		req.userRole = decoded.role;

		next();
	} catch {
		res.status(401).json({
			success: false,
			message: 'Invalid or expired token.',
		});
	}
};
