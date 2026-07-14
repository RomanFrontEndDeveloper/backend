import bcrypt from 'bcrypt';
import { ApiError } from '../utils/ApiError';
import { LoginDto, RegisterDto } from '../dto/auth.dto';
import { User } from '../models/user.model';
import { generateToken } from '../utils/jwt';

export const login = async (data: LoginDto) => {
	const user = await User.findOne({
		email: data.email,
	});

	if (!user) {
		throw new ApiError(401, 'Invalid email or password');
	}

	const isPasswordValid = await bcrypt.compare(data.password, user.password);

	if (!isPasswordValid) {
		throw new ApiError(401, 'Invalid email or password');
	}

	const token = generateToken(user._id.toString());

	return {
		success: true,
		token,
		user: {
			id: user._id,
			email: user.email,
		},
		message: 'Login successful',
	};
};

export const register = async (data: RegisterDto) => {
	const existingUser = await User.findOne({
		email: data.email,
	});

	if (existingUser) {
		throw new ApiError(409, 'User with this email already exists');
	}

	const hashedPassword = await bcrypt.hash(data.password, 10);

	const user = await User.create({
		email: data.email,
		password: hashedPassword,
	});

	return {
		success: true,
		user: {
			id: user._id,
			email: user.email,
		},
		message: 'Registration successful',
	};
};

export const getProfile = async (userId: string) => {
	const user = await User.findById(userId).select('-password -__v');

	if (!user) {
		throw new ApiError(404, 'User not found');
	}

	return {
		success: true,
		user,
	};
};
