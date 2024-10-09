import { zodResolver } from '@hookform/resolvers/zod';
import DeleteIcon from '@mui/icons-material/DeleteTwoTone';
import {
	Box,
	Button,
	IconButton,
	Stack,
	TextField,
	Typography,
} from '@mui/material';
import React from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { EllipsisTypography, StyledForm } from 'src/components';
import { Routes, Templates } from 'src/constants';
import { useStore } from 'src/hooks';
import { gallerySchema } from 'src/validation';
import { z } from 'zod';

export type GalleryFormInputs = z.infer<typeof gallerySchema>;

export interface GalleryViewFormProps {}

export const GalleryViewForm: React.FC<GalleryViewFormProps> = () => {
	const navigate = useNavigate();
	const { setGalleryData } = useStore();

	const {
		control,
		formState: { errors },
		handleSubmit,
		register,
	} = useForm<GalleryFormInputs>({
		resolver: zodResolver(gallerySchema),
	});

	const { append, fields, remove } = useFieldArray({
		control,
		name: 'images',
	});

	const onSubmit = (data: GalleryFormInputs) => {
		console.log(data);
		navigate(`/${Routes.Preview}`, {
			state: {
				template: Templates.galleryView,
				...data,
			},
		});
	};

	const onSubmitAndSave = (data: GalleryFormInputs) => {
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
						gap={1}
						key={field.id}
						mt={2}
					>
						<TextField
							label={`Image URL ${index + 1}`}
							{...register(`images.${index}.url` as const)}
							error={!!errors.images?.[index]?.url}
							fullWidth
							helperText={errors.images?.[index]?.url?.message}
						/>
						<TextField
							label={`Image Description ${index + 1}`}
							{...register(`images.${index}.description` as const)}
							fullWidth
						/>

						<IconButton
							color='error'
							onClick={() => remove(index)}
							size='large'
							sx={{ height: 50, width: 50 }}
						>
							<DeleteIcon />
						</IconButton>
					</Box>
				))}
				<Button
					onClick={() => append({ description: '', url: '' })}
					style={{ marginTop: '16px' }}
					variant='outlined'
				>
					Add Image
				</Button>
			</Box>
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
