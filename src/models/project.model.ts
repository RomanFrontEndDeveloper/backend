import { Schema, model, Types } from 'mongoose';

interface IProject {
	title: string;
	description: string;
	owner: Types.ObjectId;
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
