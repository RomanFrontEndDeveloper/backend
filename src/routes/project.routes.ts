import { Router } from 'express';
import {
	createProjectController,
	getProjectsController,
} from '../controllers/project.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();

router.post('/', authMiddleware, createProjectController);
router.get('/', authMiddleware, getProjectsController);

export default router;
