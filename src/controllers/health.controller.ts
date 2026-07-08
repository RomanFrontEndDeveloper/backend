import { Request, Response } from 'express';
import { getHealthStatus } from '../services/health.service';

export const healthCheck = (req: Request, res: Response) => {
	const message = getHealthStatus();

	res.send(message);
};
