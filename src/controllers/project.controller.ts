import { Request, Response } from 'express';
import { ZodError } from 'zod';

import { createProject } from '../services/project.service';
import { createProjectSchema } from '../validation/project.validation';
import { ApiError } from '../utils/ApiError';

export const createProjectController = async (req: Request, res: Response) => {
	try {
		const data = createProjectSchema.parse(req.body);

		const userId = req.userId!;

		const result = await createProject(data, userId);

		res.status(201).json(result);
	} catch (error) {
		if (error instanceof ZodError) {
			throw new ApiError(400, error.issues[0].message);
		}

		throw error;
	}
};
