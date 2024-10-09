import { Box, Grid2, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

export interface GalleryViewProps {}

export const GalleryView: React.FC<GalleryViewProps> = () => {
	const { state } = useLocation();
	const { galleryTitle, images } = state;

	return (
		<>
			<Typography
				gutterBottom
				variant='h5'
			>
				Gallery Title: {galleryTitle}
			</Typography>
			<Grid2 container>
				{images.map(
					(image: { url: string; description?: string }, index: number) => (
						<Grid2
							key={index}
							size={{ md: 4, sm: 6, xs: 12 }}
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
		</>
	);
};
