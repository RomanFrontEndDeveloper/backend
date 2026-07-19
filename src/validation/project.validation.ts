import { z } from 'zod';

export const createProjectSchema = z.object({
	title: z
		.string()
		.min(3, 'Title must be at least 3 characters')
		.max(100, 'Title must be less than 100 characters'),

	description: z
		.string()
		.min(10, 'Description must be at least 10 characters')
		.max(1000, 'Description must be less than 1000 characters'),
});
