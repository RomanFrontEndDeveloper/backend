import { Router } from 'express';
import {
	createProjectController,
	getProjectByIdController,
	getProjectsController,
	updateProjectController,
} from '../controllers/project.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();

router.post('/', authMiddleware, createProjectController);
router.get('/', authMiddleware, getProjectsController);
router.get('/:id', authMiddleware, getProjectByIdController);
router.put('/:id', authMiddleware, updateProjectController);

export default router;
