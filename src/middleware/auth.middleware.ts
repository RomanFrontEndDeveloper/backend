import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

type JwtPayload = {
	userId: string;
};

export const authMiddleware = (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const authHeader = req.headers.authorization;

	if (!authHeader || !authHeader.startsWith('Bearer ')) {
		return res.status(401).json({
			success: false,
			message: 'Authorization token is missing',
		});
	}

	const token = authHeader.split(' ')[1];

	const jwtSecret = process.env.JWT_SECRET;

	if (!jwtSecret) {
		throw new Error('JWT_SECRET is not defined');
	}

	try {
		const decoded = jwt.verify(token, jwtSecret) as JwtPayload;

		req.userId = decoded.userId;

		next();
	} catch {
		return res.status(401).json({
			success: false,
			message: 'Invalid or expired token',
		});
	}
};
