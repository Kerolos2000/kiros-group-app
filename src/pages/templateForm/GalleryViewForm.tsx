import { zodResolver } from '@hookform/resolvers/zod';
import DeleteIcon from '@mui/icons-material/DeleteTwoTone';
import {
	Box,
	Button,
	Grid2,
	IconButton,
	TextField,
	Typography,
} from '@mui/material';
import React from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { EllipsisTypography, FormActions, StyledForm } from 'src/components';
import { Templates } from 'src/constants';
import { useNavigateToPreview, useStore } from 'src/hooks';
import { gallerySchema } from 'src/validation';
import { v7 as uuid } from 'uuid';
import { z } from 'zod';

export type GalleryFormTypes = z.infer<typeof gallerySchema>;

export interface GalleryViewFormProps {}

export const GalleryViewForm: React.FC<GalleryViewFormProps> = () => {
	const { state } = useLocation();
	const { setGalleryData } = useStore();
	const { navigateToPreview } = useNavigateToPreview();

	const {
		control,
		formState: { errors },
		handleSubmit,
		register,
	} = useForm<GalleryFormTypes>({
		defaultValues: {
			images: state?.images || Array(4).fill({ description: '', url: '' }),
			...state,
		},
		resolver: zodResolver(gallerySchema),
	});

	const { append, fields, remove } = useFieldArray({
		control,
		name: 'images',
	});

	const onSubmit = (data: GalleryFormTypes) => {
		navigateToPreview(data, Templates.galleryView);
	};

	const onSubmitAndSave = (data: GalleryFormTypes) => {
		if (state && state.id) {
			data.id = state.id;
		} else {
			data.id = uuid();
		}
		setGalleryData(data);
		onSubmit(data);
	};

	return (
		<StyledForm>
			<EllipsisTypography>Enter your gallery details</EllipsisTypography>
			<TextField
				label='Gallery Title'
				{...register('galleryTitle')}
				error={!!errors.galleryTitle}
				fullWidth
				helperText={errors.galleryTitle?.message}
			/>
			<Box sx={{ width: '100%' }}>
				<Typography variant='h6'>Images</Typography>
				{errors.images && (
					<Typography color='error'>{errors.images.message}</Typography>
				)}
				{fields.map((field, index) => (
					<Box
						display='flex'
						key={field.id}
						mt={2}
					>
						<Grid2
							container
							flex={1}
							spacing={2}
						>
							<Grid2 size={{ md: 6, xs: 12 }}>
								<TextField
									label={`Image URL ${index + 1}`}
									{...register(`images.${index}.url`)}
									error={!!errors.images?.[index]?.url}
									fullWidth
									helperText={errors.images?.[index]?.url?.message}
								/>
							</Grid2>
							<Grid2 size={{ md: 6, xs: 12 }}>
								<TextField
									label={`Image Description ${index + 1}`}
									{...register(`images.${index}.description`)}
									fullWidth
								/>
							</Grid2>
						</Grid2>

						{fields.length > 4 ? (
							<IconButton
								color='error'
								onClick={() => remove(index)}
								size='large'
								sx={{ height: 50, width: 50 }}
							>
								<DeleteIcon />
							</IconButton>
						) : null}
					</Box>
				))}
				<Button
					onClick={() => append({ description: '', url: '' })}
					sx={{ mt: 2 }}
					variant='outlined'
				>
					Add Image
				</Button>
			</Box>
			<FormActions
				handleSubmit={handleSubmit}
				onSubmit={onSubmit}
				onSubmitAndSave={onSubmitAndSave}
				state={state}
			/>
		</StyledForm>
	);
};
