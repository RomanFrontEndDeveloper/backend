import { NextFunction, Request, Response } from 'express';

export const adminMiddleware = (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	if (req.userRole !== 'admin') {
		return res.status(403).json({
			success: false,
			message: 'Access denied',
		});
	}

	next();
};
