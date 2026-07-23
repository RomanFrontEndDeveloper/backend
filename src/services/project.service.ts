import { CreateProjectDto, UpdateProjectDto } from '../dto/project.dto';
import { Project } from '../models/project.model';

export const createProject = async (data: CreateProjectDto, userId: string) => {
	const project = await Project.create({
		title: data.title,
		description: data.description,
		owner: userId,
	});

	return {
		success: true,
		project,
		message: 'Project created successfully',
	};
};

export const getProjects = async (userId: string) => {
	const projects = await Project.find({
		owner: userId,
	}).sort({
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
