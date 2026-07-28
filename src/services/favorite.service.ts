import { Favorite } from '../models/favorite.model';

export const addFavorite = async (userId: string, projectId: string) => {
	const favorite = await Favorite.create({
		user: userId,
		project: projectId,
	});

	return {
		success: true,
		favorite,
	};
};

export const removeFavorite = async (userId: string, projectId: string) => {
	await Favorite.findOneAndDelete({
		user: userId,
		project: projectId,
	});

	return {
		success: true,
		message: 'Favorite removed',
	};
};

export const getFavorites = async (userId: string) => {
	const favorites = await Favorite.find({
		user: userId,
	})
		.populate('project')
		.lean();

	return {
		success: true,
		favorites: favorites.filter((favorite) => favorite.project),
	};
};
