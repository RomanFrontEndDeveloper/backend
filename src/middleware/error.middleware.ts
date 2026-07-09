import { NextFunction, Request, Response } from 'express';
import { ApiError } from '../utils/ApiError';
import { ZodError } from 'zod';

export const errorMiddleware = (
	error: unknown,
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	if (error instanceof ApiError) {
		return res.status(error.statusCode).json({
			success: false,
			message: error.message,
		});
	}

	if (error instanceof ZodError) {
		return res.status(400).json({
			success: false,
			errors: error.flatten().fieldErrors,
		});
	}

	console.error(error);

	return res.status(500).json({
		success: false,
		message: 'Internal Server Error',
	});
};
