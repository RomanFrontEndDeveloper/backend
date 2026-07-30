import { rateLimit } from 'express-rate-limit';

export const apiLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 хвилин
	max: 100, // максимум 100 запитів
	standardHeaders: true,
	legacyHeaders: false,
	message: {
		message: 'Too many requests. Please try again later.',
	},
});
