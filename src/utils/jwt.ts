import jwt from 'jsonwebtoken';

export const generateToken = (
	userId: string,
	role: 'user' | 'admin',
): string => {
	const jwtSecret = process.env.JWT_SECRET;

	if (!jwtSecret) {
		throw new Error('JWT_SECRET is not defined');
	}

	return jwt.sign(
		{
			userId,
			role,
		},
		jwtSecret,
		{
			expiresIn: '7d',
		},
	);
};
