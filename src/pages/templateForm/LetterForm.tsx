import { zodResolver } from '@hookform/resolvers/zod';
import { Button, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { EllipsisTypography, StyledForm } from 'src/components';
import { Routes, Templates } from 'src/constants';
import { letterSchema } from 'src/validation';
import { z } from 'zod';

type LetterFormInputs = z.infer<typeof letterSchema>;

export interface LetterFormProps {}

export const LetterForm: React.FC<LetterFormProps> = () => {
	const navigate = useNavigate();

	const {
		formState: { errors },
		handleSubmit,
		register,
	} = useForm<LetterFormInputs>({
		resolver: zodResolver(letterSchema),
	});

	const onSubmit = (data: LetterFormInputs) => {
		console.log(data);
		navigate(`/${Routes.Preview}`, {
			state: {
				template: Templates.letter,
				...data,
			},
		});
	};
	return (
		<StyledForm onSubmit={handleSubmit(onSubmit)}>
			<EllipsisTypography>Enter your letter details</EllipsisTypography>
			<TextField
				label="Sender's Name"
				{...register('senderName')}
				error={!!errors.senderName}
				fullWidth
				helperText={errors.senderName?.message}
			/>
			<TextField
				label="Recipient's Name"
				{...register('recipientName')}
				error={!!errors.recipientName}
				fullWidth
				helperText={errors.recipientName?.message}
			/>
			<TextField
				label='Date'
				type='date'
				{...register('date')}
				error={!!errors.date}
				fullWidth
				helperText={errors.date?.message}
			/>
			<TextField
				label='Letter Body'
				{...register('letterBody')}
				error={!!errors.letterBody}
				fullWidth
				helperText={errors.letterBody?.message}
				multiline
				rows={6}
			/>
			<Button
				type='submit'
				variant='contained'
			>
				Submit
			</Button>
		</StyledForm>
	);
};
