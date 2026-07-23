import { Schema, model, Types } from 'mongoose';

interface IProject {
	title: string;
	description: string;
	owner: Types.ObjectId;
	imageUrl?: string;
	imagePublicId?: string;
}

const projectSchema = new Schema<IProject>(
	{
		title: {
			type: String,
			required: true,
			trim: true,
		},
		description: {
			type: String,
			required: true,
			trim: true,
		},
		imageUrl: {
			type: String,
			default: '',
		},

		imagePublicId: {
			type: String,
			default: '',
		},
		owner: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
	},
	{
		timestamps: true,
	},
);

export const Project = model<IProject>('Project', projectSchema);
