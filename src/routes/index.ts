import { Router } from 'express';
import { healthCheck } from '../controllers/health.controller';
import authRouter from './auth.routes';
import projectRouter from './project.routes';

const router = Router();

router.get('/', healthCheck);

router.use('/auth', authRouter);
router.use('/projects', projectRouter);

export default router;
