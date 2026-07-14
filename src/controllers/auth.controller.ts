import { Request, Response } from 'express';
import {
	getProfile as getProfileService,
	login as loginService,
	register as registerService,
} from '../services/auth.service';
import { loginSchema, registerSchema } from '../validation/auth.validation';
import { ApiError } from '../utils/ApiError';
import { ZodError } from 'zod';

export const login = async (req: Request, res: Response) => {
	try {
		const data = loginSchema.parse(req.body);

		const result = await loginService(data);

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

		console.error(error);

		return res.status(500).json({
			success: false,
			message: 'Internal Server Error',
		});
	}
};

export const register = async (req: Request, res: Response) => {
	try {
		const data = registerSchema.parse(req.body);

		const result = await registerService(data);

		return res.status(201).json(result);
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

		console.error(error);

		return res.status(500).json({
			success: false,
			message: 'Internal Server Error',
		});
	}
};

export const getProfile = async (req: Request, res: Response) => {
	try {
		const userId = req.userId;

		if (!userId) {
			throw new ApiError(401, 'Unauthorized');
		}

		const result = await getProfileService(userId);

		return res.status(200).json(result);
	} catch (error) {
		if (error instanceof ApiError) {
			return res.status(error.statusCode).json({
				success: false,
				message: error.message,
			});
		}

		console.error(error);

		return res.status(500).json({
			success: false,
			message: 'Internal Server Error',
		});
	}
};
