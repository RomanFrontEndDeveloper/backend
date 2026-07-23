import { Request, Response } from 'express';
import { ZodError } from 'zod';
import {
	createProject,
	deleteProject,
	getProjectById,
	getProjects,
	updateProject,
} from '../services/project.service';
import { createProjectSchema } from '../validation/project.validation';
import { ApiError } from '../utils/ApiError';
import { uploadToCloudinary } from '../services/cloudinary.service';

export const createProjectController = async (req: Request, res: Response) => {
	try {
		const data = createProjectSchema.parse(req.body);

		const userId = req.userId!;

		let imageUrl = '';
		let imagePublicId = '';

		if (req.file) {
			const uploadedImage = await uploadToCloudinary(req.file.buffer);

			imageUrl = uploadedImage.secure_url;
			imagePublicId = uploadedImage.public_id;
		}

		const result = await createProject(
			{
				...data,
				imageUrl,
				imagePublicId,
			},
			userId,
		);

		res.status(201).json(result);
	} catch (error) {
		if (error instanceof ZodError) {
			throw new ApiError(400, error.issues[0].message);
		}

		throw error;
	}
};

export const getProjectsController = async (req: Request, res: Response) => {
	const userId = req.userId!;
	const search = req.query.search as string | undefined;

	const result = await getProjects(userId, search);

	res.json(result);
};

export const updateProjectController = async (req: Request, res: Response) => {
	try {
		const data = createProjectSchema.parse(req.body);

		const userId = req.userId!;
		const projectId = req.params.id as string;

		const result = await updateProject(projectId, userId, data);

		res.json(result);
	} catch (error) {
		if (error instanceof ZodError) {
			throw new ApiError(400, error.issues[0].message);
		}

		throw error;
	}
};

export const getProjectByIdController = async (req: Request, res: Response) => {
	const userId = req.userId!;
	const projectId = req.params.id as string;

	const result = await getProjectById(projectId, userId);

	res.json(result);
};

export const deleteProjectController = async (req: Request, res: Response) => {
	const userId = req.userId!;
	const projectId = req.params.id as string;

	const result = await deleteProject(projectId, userId);

	res.json(result);
};
