import { Router } from 'express';
import { healthCheck } from '../controllers/health.controller';
import authRouter from './auth.routes';
import projectRouter from './project.routes';
import dashboardRouter from './dashboard.routes';
import favoriteRouter from './favorite.routes';

const router = Router();

router.get('/', healthCheck);

router.use('/auth', authRouter);
router.use('/projects', projectRouter);
router.use('/dashboard', dashboardRouter);
router.use('/favorites', favoriteRouter);

export default router;
