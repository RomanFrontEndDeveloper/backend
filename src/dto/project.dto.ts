export type CreateProjectDto = {
	title: string;
	description: string;
	imageUrl?: string;
	imagePublicId?: string;
};

export type UpdateProjectDto = {
	title: string;
	description: string;
	imageUrl?: string;
	imagePublicId?: string;
};
