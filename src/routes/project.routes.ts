import { Router } from 'express';
import {
	createProjectController,
	deleteProjectController,
	getProjectByIdController,
	getProjectsController,
	updateProjectController,
} from '../controllers/project.controller';
import { authMiddleware } from '../middleware/auth.middleware';
import { upload } from '../middleware/upload.middleware';

const router = Router();

router.post(
	'/',
	authMiddleware,
	upload.single('image'),
	createProjectController,
);
router.get('/', authMiddleware, getProjectsController);
router.get('/:id', authMiddleware, getProjectByIdController);
router.put('/:id', authMiddleware, updateProjectController);
router.delete('/:id', authMiddleware, deleteProjectController);

export default router;
