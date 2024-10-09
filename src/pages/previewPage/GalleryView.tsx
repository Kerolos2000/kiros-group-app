import { Box, Button, Grid2, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

import { GalleryFormTypes } from '../templateForm';

export interface GalleryViewProps {
	data?: GalleryFormTypes;
	onEdit?: (data: GalleryFormTypes) => void;
}

export const GalleryView: React.FC<GalleryViewProps> = props => {
	const { state } = useLocation();

	const { data = state, onEdit } = props;
	const { galleryTitle, images } = data;

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
					(image: { url: string; description?: string }, index: number) => (
						<Grid2
							key={index}
							size={{ sm: 6 }}
						>
							<Box
								alt={`Image ${index + 1}`}
								component='img'
								src={image.url}
								width='100%'
							/>
							{image.description && (
								<Typography variant='body2'>{image.description}</Typography>
							)}
						</Grid2>
					),
				)}
			</Grid2>
			{onEdit ? (
				<Button
					onClick={() => onEdit(data)}
					variant='contained'
				>
					Edit
				</Button>
			) : null}
		</>
	);
};
