import { Request, Response } from 'express';
import { getDashboardStats } from '../services/dashboard.service';
import { ApiError } from '../utils/ApiError';

export const getDashboardStatsController = async (
	req: Request,
	res: Response,
) => {
	try {
		const userId = req.userId;

		if (!userId) {
			throw new ApiError(401, 'Unauthorized');
		}

		const result = await getDashboardStats(userId);

		return res.status(200).json(result);
	} catch (error) {
		if (error instanceof ApiError) {
			return res.status(error.statusCode).json({
				success: false,
				message: error.message,
			});
		}

		console.error(error);

		return res.status(500).json({
			success: false,
			message: 'Internal Server Error',
		});
	}
};
