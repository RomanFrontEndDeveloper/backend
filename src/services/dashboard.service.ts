import { Project } from '../models/project.model';

export const getDashboardStats = async (userId: string) => {
	const projects = await Project.find({
		owner: userId,
	}).sort({
		updatedAt: -1,
	});

	return {
		success: true,
		stats: {
			projectsCount: projects.length,
			lastProject:
				projects.length > 0 ? projects[0].title : 'No projects',
			lastUpdate: projects.length > 0 ? projects[0].updatedAt : null,
		},
	};
};
