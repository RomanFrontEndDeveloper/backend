import { CreateProjectDto } from '../dto/project.dto';
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
