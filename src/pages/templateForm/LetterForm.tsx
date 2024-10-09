import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Stack, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { EllipsisTypography, StyledForm } from 'src/components';
import { Routes, Templates } from 'src/constants';
import { useStore } from 'src/hooks';
import { letterSchema } from 'src/validation';
import { z } from 'zod';

export type LetterFormTypes = z.infer<typeof letterSchema>;

export interface LetterFormProps {}

export const LetterForm: React.FC<LetterFormProps> = () => {
	const navigate = useNavigate();
	const { setLetterData } = useStore();

	const {
		formState: { errors },
		handleSubmit,
		register,
	} = useForm<LetterFormTypes>({
		resolver: zodResolver(letterSchema),
	});

	const onSubmit = (data: LetterFormTypes) => {
		navigate(`/${Routes.Preview}`, {
			state: {
				template: Templates.letter,
				...data,
			},
		});
	};

	const onSubmitAndSave = (data: LetterFormTypes) => {
		setLetterData(data);
		onSubmit(data);
	};

	return (
		<StyledForm onSubmit={handleSubmit(onSubmitAndSave)}>
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
			<Stack
				direction='row'
				spacing={1}
			>
				<Button
					onClick={handleSubmit(onSubmit)}
					variant='contained'
				>
					Submit
				</Button>
				<Button
					onClick={handleSubmit(onSubmitAndSave)}
					variant='outlined'
				>
					Submit and Save
				</Button>
			</Stack>
		</StyledForm>
	);
};
