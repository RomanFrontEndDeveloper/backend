import { CreateProjectDto, UpdateProjectDto } from '../dto/project.dto';
import { Project } from '../models/project.model';
import { deleteFromCloudinary } from './cloudinary.service';

const DEFAULT_LIMIT = 3;

export const createProject = async (data: CreateProjectDto, userId: string) => {
	const project = await Project.create({
		title: data.title,
		description: data.description,
		imageUrl: data.imageUrl,
		imagePublicId: data.imagePublicId,
		owner: userId,
	});

	return {
		success: true,
		project,
		message: 'Project created successfully',
	};
};

export const getProjects = async (
	userId: string,
	search?: string,
	page = 1,
	limit = DEFAULT_LIMIT,
) => {
	const filter: {
		owner: string;
		$or?: {
			title?: {
				$regex: string;
				$options: string;
			};
			description?: {
				$regex: string;
				$options: string;
			};
		}[];
	} = {
		owner: userId,
	};

	const skip = (page - 1) * limit;

	if (search) {
		filter.$or = [
			{
				title: {
					$regex: search,
					$options: 'i',
				},
			},
			{
				description: {
					$regex: search,
					$options: 'i',
				},
			},
		];
	}
	const projects = await Project.find(filter)
		.sort({
			createdAt: -1,
		})
		.skip(skip)
		.limit(limit);

	const totalProjects = await Project.countDocuments(filter);

	const totalPages = Math.ceil(totalProjects / limit);

	return {
		success: true,
		projects,
		currentPage: page,
		totalPages,
		totalProjects,
	};
};

export const updateProject = async (
	projectId: string,
	userId: string,
	data: UpdateProjectDto,
) => {
	const project = await Project.findOne({
		_id: projectId,
		owner: userId,
	});

	if (!project) {
		throw new Error('Project not found');
	}

	project.title = data.title;
	project.description = data.description;

	if (data.imageUrl && data.imagePublicId) {
		if (project.imagePublicId) {
			await deleteFromCloudinary(project.imagePublicId);
		}

		project.imageUrl = data.imageUrl;
		project.imagePublicId = data.imagePublicId;
	}

	await project.save();

	return {
		success: true,
		project,
		message: 'Project updated successfully',
	};
};

export const getProjectById = async (projectId: string, userId: string) => {
	const project = await Project.findOne({
		_id: projectId,
		owner: userId,
	});

	return {
		success: true,
		project,
	};
};

export const deleteProject = async (projectId: string, userId: string) => {
	const project = await Project.findOneAndDelete({
		_id: projectId,
		owner: userId,
	});

	return {
		success: true,
		project,
		message: 'Project deleted successfully',
	};
};
