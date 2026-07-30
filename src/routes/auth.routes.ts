import { Router } from 'express';
import { getProfile, login, register } from '../controllers/auth.controller';
import { authMiddleware } from '../middleware/auth.middleware';
import { validate } from '../middleware/validate.middleware';
import { loginSchema, registerSchema } from '../validation/auth.validation';

const router = Router();

router.post('/login', validate(loginSchema), login);

router.post('/register', validate(registerSchema), register);

router.get('/profile', authMiddleware, getProfile);

export default router;
