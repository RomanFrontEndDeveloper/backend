import { Schema, model } from 'mongoose';

interface IUser {
	email: string;
	password: string;
	role: 'user' | 'admin';
}

const userSchema = new Schema<IUser>(
	{
		email: {
			type: String,
			required: true,
			unique: true,
			trim: true,
			lowercase: true,
		},

		password: {
			type: String,
			required: true,
			minlength: 8,
		},

		role: {
			type: String,
			enum: ['user', 'admin'],
			default: 'user',
		},
	},
	{
		timestamps: true,
	},
);

export const User = model<IUser>('User', userSchema);
