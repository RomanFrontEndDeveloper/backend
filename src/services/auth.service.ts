import { ApiError } from '../utils/ApiError';
import { LoginDto } from '../dto/auth.dto';
import { users } from '../data/users';

export const login = (data: LoginDto) => {
	const user = users.find((user) => user.email === data.email);

	if (!user) {
		throw new ApiError(401, 'User not found');
	}

	if (user.password !== data.password) {
		throw new ApiError(401, 'Invalid password');
	}

	return {
		success: true,
		user: {
			email: user.email,
		},
		message: 'Login successful',
	};
};
