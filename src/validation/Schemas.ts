import { z as zod } from 'zod';

export const businessCardSchema = zod.object({
	email: zod.string().email('Invalid email'),
	jobTitle: zod.string().min(1, 'Job Title is required'),
	name: zod.string().min(1, 'Name is required'),
	phone: zod.string().min(10, 'Phone number should be at least 10 digits'),
	website: zod.string().optional(),
});

export const gallerySchema = zod.object({
	galleryTitle: zod.string().min(1, 'Gallery title is required'),
	images: zod
		.array(
			zod.object({
				description: zod.string().optional(),
				url: zod.string().url({ message: 'Invalid URL' }),
			}),
		)
		.min(4, { message: 'You must provide at least 4 images' })
		.max(50, { message: 'You can provide a maximum of 50 images' }),
});

export const letterSchema = zod.object({
	date: zod.string().min(1, 'Date is required'),
	letterBody: zod.string().min(1, 'Letter body is required'),
	recipientName: zod.string().min(1, 'Recipient name is required'),
	senderName: zod.string().min(1, 'Sender name is required'),
});
