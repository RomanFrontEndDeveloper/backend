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
import { adminMiddleware } from '../middleware/admin.middleware';

const router = Router();

router.post(
	'/',
	authMiddleware,
	upload.single('image'),
	createProjectController,
);

router.get('/', authMiddleware, getProjectsController);

router.get('/admin-test', authMiddleware, adminMiddleware, (req, res) => {
	// console.log('ADMIN TEST');

	res.json({
		success: true,
		message: 'Welcome Admin!',
	});
});

router.get('/:id', authMiddleware, getProjectByIdController);

router.put(
	'/:id',
	authMiddleware,
	upload.single('image'),
	updateProjectController,
);

router.delete('/:id', authMiddleware, deleteProjectController);

export default router;
