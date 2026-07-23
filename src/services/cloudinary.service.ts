import { UploadApiResponse } from 'cloudinary';
import { Readable } from 'stream';

import cloudinary from '../config/cloudinary';

export const uploadToCloudinary = (
	buffer: Buffer,
	folder = 'freelancehub',
): Promise<UploadApiResponse> => {
	return new Promise((resolve, reject) => {
		const uploadStream = cloudinary.uploader.upload_stream(
			{
				folder,
			},
			(error, result) => {
				if (error) {
					return reject(error);
				}

				resolve(result!);
			},
		);

		Readable.from(buffer).pipe(uploadStream);
	});
};
