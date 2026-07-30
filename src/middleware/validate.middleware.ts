import { NextFunction, Request, Response } from 'express';
import { ZodError, ZodType } from 'zod';

export const validate =
	(schema: ZodType) =>
	(req: Request, res: Response, next: NextFunction): void => {
		try {
			schema.parse(req.body);
			next();
		} catch (error) {
			if (error instanceof ZodError) {
				res.status(400).json({
					success: false,
					message: 'Validation failed.',
					errors: error.issues,
				});
				return;
			}

			next(error);
		}
	};
