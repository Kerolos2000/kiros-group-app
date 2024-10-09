import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Stack, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { EllipsisTypography, StyledForm } from 'src/components';
import { Routes, Templates } from 'src/constants';
import { useStore } from 'src/hooks';
import { businessCardSchema } from 'src/validation';
import { z } from 'zod';

export type BusinessCardFormInputs = z.infer<typeof businessCardSchema>;

export interface BusinessCardFormProps {}

export const BusinessCardForm: React.FC<BusinessCardFormProps> = () => {
	const navigate = useNavigate();
	const { setBusinessCardData } = useStore();

	const {
		formState: { errors },
		handleSubmit,
		register,
	} = useForm<BusinessCardFormInputs>({
		resolver: zodResolver(businessCardSchema),
	});

	const onSubmit = (data: BusinessCardFormInputs) => {
		navigate(`/${Routes.Preview}`, {
			state: {
				template: Templates.businessCard,
				...data,
			},
		});
	};

	const onSubmitAndSave = (data: BusinessCardFormInputs) => {
		setBusinessCardData(data);
		onSubmit(data);
	};

	return (
		<StyledForm>
			<EllipsisTypography>Enter your business card details</EllipsisTypography>
			<TextField
				label='Name'
				{...register('name')}
				error={!!errors.name}
				fullWidth
				helperText={errors.name?.message}
			/>
			<TextField
				label='Job Title'
				{...register('jobTitle')}
				error={!!errors.jobTitle}
				fullWidth
				helperText={errors.jobTitle?.message}
			/>
			<TextField
				label='Email'
				{...register('email')}
				error={!!errors.email}
				fullWidth
				helperText={errors.email?.message}
			/>
			<TextField
				label='Phone'
				{...register('phone')}
				error={!!errors.phone}
				fullWidth
				helperText={errors.phone?.message}
			/>
			<TextField
				label='Website'
				{...register('website')}
				error={!!errors.website}
				fullWidth
				helperText={errors.website?.message}
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
