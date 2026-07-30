import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import router from './routes';
import { errorMiddleware } from './middleware/error.middleware';
import { apiLimiter } from './middleware/rateLimit.middleware';

const app = express();

app.disable('x-powered-by');

app.use(helmet());

app.use(apiLimiter);

app.use(
	cors({
		origin: process.env.FRONTEND_URL,
		credentials: true,
	}),
);

app.use(
	express.json({
		limit: '1mb',
	}),
);

app.use('/api', router);

app.use(errorMiddleware);

export default app;
