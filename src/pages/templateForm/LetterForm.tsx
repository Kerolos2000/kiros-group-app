import { zodResolver } from '@hookform/resolvers/zod';
import { Grid, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { EllipsisTypography, FormActions, StyledForm } from 'src/components';
import { Templates } from 'src/constants';
import { useNavigateToPreview, useStore } from 'src/hooks';
import { letterSchema } from 'src/validation';
import { v7 as uuid } from 'uuid';
import { z } from 'zod';

export type LetterFormTypes = z.infer<typeof letterSchema>;

export interface LetterFormProps {}

export const LetterForm: React.FC<LetterFormProps> = () => {
	const { state } = useLocation();
	const { setLetterData } = useStore();
	const { navigateToPreview } = useNavigateToPreview();

	const {
		formState: { errors },
		handleSubmit,
		register,
	} = useForm<LetterFormTypes>({
		defaultValues: state,
		resolver: zodResolver(letterSchema),
	});

	const onSubmit = (data: LetterFormTypes) => {
		navigateToPreview(data, Templates.letter);
	};

	const onSubmitAndSave = (data: LetterFormTypes) => {
		if (state && state.id) {
			data.id = state.id;
		} else {
			data.id = uuid();
		}
		setLetterData(data);
		onSubmit(data);
	};

	return (
		<StyledForm onSubmit={handleSubmit(onSubmitAndSave)}>
			<EllipsisTypography>Enter your letter details</EllipsisTypography>
			<Grid
				container
				spacing={2}
			>
				<Grid size={{ md: 6, xs: 12 }}>
					<TextField
						label="Sender's Name"
						{...register('senderName')}
						error={!!errors.senderName}
						fullWidth
						helperText={errors.senderName?.message}
					/>
				</Grid>
				<Grid size={{ md: 6, xs: 12 }}>
					<TextField
						label="Recipient's Name"
						{...register('recipientName')}
						error={!!errors.recipientName}
						fullWidth
						helperText={errors.recipientName?.message}
					/>
				</Grid>
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
			</Grid>
			<FormActions
				handleSubmit={handleSubmit}
				onSubmit={onSubmit}
				onSubmitAndSave={onSubmitAndSave}
				state={state}
			/>
		</StyledForm>
	);
};
