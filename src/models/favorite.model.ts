import { Schema, model, Types } from 'mongoose';

interface IFavorite {
	user: Types.ObjectId;
	project: Types.ObjectId;
}

const favoriteSchema = new Schema<IFavorite>(
	{
		user: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		project: {
			type: Schema.Types.ObjectId,
			ref: 'Project',
			required: true,
		},
	},
	{
		timestamps: true,
	},
);

favoriteSchema.index(
	{
		user: 1,
		project: 1,
	},
	{
		unique: true,
	},
);

export const Favorite = model<IFavorite>('Favorite', favoriteSchema);
