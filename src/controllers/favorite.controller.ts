import { Request, Response } from 'express';
import {
	addFavorite,
	removeFavorite,
	getFavorites,
} from '../services/favorite.service';

export const addFavoriteController = async (req: Request, res: Response) => {
	const result = await addFavorite(
		req.userId!,
		req.params.projectId as string,
	);

	res.status(201).json(result);
};

export const removeFavoriteController = async (req: Request, res: Response) => {
	const result = await removeFavorite(
		req.userId!,
		req.params.projectId as string,
	);

	res.json(result);
};

export const getFavoritesController = async (req: Request, res: Response) => {
	const result = await getFavorites(req.userId!);

	res.json(result);
};
