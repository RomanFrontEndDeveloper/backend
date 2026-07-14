import { Router } from 'express';
import { getProfile, login, register } from '../controllers/auth.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();

router.post('/login', login);

router.post('/register', register);

router.get('/profile', authMiddleware, getProfile);

export default router;
