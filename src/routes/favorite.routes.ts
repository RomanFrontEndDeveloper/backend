import { Router } from 'express';
import { authMiddleware } from '../middleware/auth.middleware';
import { validateObjectId } from '../middleware/validateObjectId.middleware';
import {
	addFavoriteController,
	removeFavoriteController,
	getFavoritesController,
} from '../controllers/favorite.controller';

const router = Router();

router.get('/', authMiddleware, getFavoritesController);

router.post(
	'/:projectId',
	authMiddleware,
	validateObjectId,
	addFavoriteController,
);

router.delete(
	'/:projectId',
	authMiddleware,
	validateObjectId,
	removeFavoriteController,
);

export default router;
