import { Request, Response } from 'express';
import { login as loginService } from '../services/auth.service';
import { ApiError } from '../utils/ApiError';
import { loginSchema } from '../validation/auth.validation';
import { ZodError } from 'zod';

export const login = (req: Request, res: Response) => {
	try {
		const data = loginSchema.parse(req.body);

		const result = loginService(data);

		return res.status(200).json(result);
	} catch (error) {
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

		return res.status(500).json({
			success: false,
			message: 'Internal Server Error',
		});
	}
};
