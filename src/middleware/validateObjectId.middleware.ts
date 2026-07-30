import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';

export const validateObjectId = (
	req: Request,
	res: Response,
	next: NextFunction,
): void => {
	const id = req.params.id ?? req.params.projectId;

	if (typeof id !== 'string' || !mongoose.Types.ObjectId.isValid(id)) {
		res.status(400).json({
			success: false,
			message: 'Invalid resource ID.',
		});
		return;
	}

	next();
};
