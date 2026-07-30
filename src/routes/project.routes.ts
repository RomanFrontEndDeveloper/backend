import { Router } from 'express';
import {
	createProjectController,
	deleteProjectController,
	getProjectByIdController,
	getProjectsController,
	updateProjectController,
} from '../controllers/project.controller';
import { authMiddleware } from '../middleware/auth.middleware';
import { adminMiddleware } from '../middleware/admin.middleware';
import { upload } from '../middleware/upload.middleware';
import { validateObjectId } from '../middleware/validateObjectId.middleware';

const router = Router();

router.post(
	'/',
	authMiddleware,
	upload.single('image'),
	createProjectController,
);

router.get('/', authMiddleware, getProjectsController);

router.get('/admin-test', authMiddleware, adminMiddleware, (req, res) => {
	res.json({
		success: true,
		message: 'Welcome Admin!',
	});
});

router.get('/:id', authMiddleware, validateObjectId, getProjectByIdController);

router.put(
	'/:id',
	authMiddleware,
	validateObjectId,
	upload.single('image'),
	updateProjectController,
);

router.delete(
	'/:id',
	authMiddleware,
	validateObjectId,
	deleteProjectController,
);

export default router;
