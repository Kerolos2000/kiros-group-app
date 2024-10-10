import { zodResolver } from '@hookform/resolvers/zod';
import { TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { EllipsisTypography, FormActions, StyledForm } from 'src/components';
import { Templates } from 'src/constants';
import { useNavigateToPreview, useStore } from 'src/hooks';
import { businessCardSchema } from 'src/validation';
import { v7 as uuid } from 'uuid';
import { z } from 'zod';

export type BusinessCardFormTypes = z.infer<typeof businessCardSchema>;

export interface BusinessCardFormProps {}

export const BusinessCardForm: React.FC<BusinessCardFormProps> = () => {
	const { state } = useLocation();
	const { setBusinessCardData } = useStore();
	const { navigateToPreview } = useNavigateToPreview();

	const {
		formState: { errors },
		handleSubmit,
		register,
	} = useForm<BusinessCardFormTypes>({
		defaultValues: state,
		resolver: zodResolver(businessCardSchema),
	});

	const onSubmit = (data: BusinessCardFormTypes) => {
		navigateToPreview(data, Templates.businessCard);
	};

	const onSubmitAndSave = (data: BusinessCardFormTypes) => {
		if (state && state.id) {
			data.id = state.id;
		} else {
			data.id = uuid();
		}
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
			<FormActions
				handleSubmit={handleSubmit}
				onSubmit={onSubmit}
				onSubmitAndSave={onSubmitAndSave}
				state={state}
			/>
		</StyledForm>
	);
};
