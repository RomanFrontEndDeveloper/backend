import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import router from './routes';
import { errorMiddleware } from './middleware/error.middleware';
import { apiLimiter } from './middleware/rateLimit.middleware';
import morgan from 'morgan';

const app = express();

app.disable('x-powered-by');

app.use(helmet());
app.use(morgan('dev'));

app.use(apiLimiter);

app.get('/healthz', (_req, res) => {
	res.status(200).send('OK');
});

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
