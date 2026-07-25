import { Router } from 'express';
import { authMiddleware } from '../middleware/auth.middleware';
import {
	addFavoriteController,
	removeFavoriteController,
	getFavoritesController,
} from '../controllers/favorite.controller';

const router = Router();

router.get('/', authMiddleware, getFavoritesController);

router.post('/:projectId', authMiddleware, addFavoriteController);

router.delete('/:projectId', authMiddleware, removeFavoriteController);

export default router;
