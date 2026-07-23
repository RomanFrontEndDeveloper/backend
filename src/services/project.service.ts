import { CreateProjectDto, UpdateProjectDto } from '../dto/project.dto';
import { Project } from '../models/project.model';

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

export const getProjects = async (userId: string, search?: string) => {
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

	const projects = await Project.find(filter).sort({
		createdAt: -1,
	});

	return {
		success: true,
		projects,
	};
};

export const updateProject = async (
	projectId: string,
	userId: string,
	data: UpdateProjectDto,
) => {
	const project = await Project.findOneAndUpdate(
		{
			_id: projectId,
			owner: userId,
		},
		{
			title: data.title,
			description: data.description,
		},
		{
			new: true,
		},
	);

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
