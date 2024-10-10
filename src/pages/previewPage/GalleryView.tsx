import { Box, Button, Grid2, Stack, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { Routes, Templates } from 'src/constants';

import { GalleryFormTypes } from '../templateForm';

export interface GalleryViewProps {
	data?: GalleryFormTypes;
	onEdit?: (data: GalleryFormTypes) => void;
}

export const GalleryView: React.FC<GalleryViewProps> = props => {
	const navigate = useNavigate();
	const { state } = useLocation();

	const { data = state, onEdit } = props;
	const { galleryTitle, images } = data;

	const Preview = (data: GalleryFormTypes) => {
		navigate(`/${Routes.Preview}`, {
			state: {
				template: Templates.galleryView,
				...data,
			},
		});
	};

	return (
		<>
			<Typography
				gutterBottom
				variant='h5'
			>
				Gallery Title: {galleryTitle}
			</Typography>
			<Grid2
				container
				spacing={2}
			>
				{images.map(
					(image: { url: string; description?: string }, index: number) => {
						const { description, url } = image;

						return (
							<Grid2
								key={index}
								size={{ md: 4, sm: 6, xs: 12 }}
							>
								<Box
									alt={`Image ${index + 1}`}
									component='img'
									src={url}
									width='100%'
								/>
								{description && (
									<Typography variant='body2'>{description}</Typography>
								)}
							</Grid2>
						);
					},
				)}
			</Grid2>
			{onEdit ? (
				<Stack
					direction='row'
					spacing={1}
				>
					<Button
						onClick={() => onEdit(data)}
						variant='contained'
					>
						Edit
					</Button>
					<Button
						onClick={() => Preview(data)}
						variant='outlined'
					>
						Preview
					</Button>
				</Stack>
			) : null}
		</>
	);
};
