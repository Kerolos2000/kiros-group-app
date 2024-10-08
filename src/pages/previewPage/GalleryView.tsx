import { Box, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

export interface GalleryViewProps {}

export const GalleryView: React.FC<GalleryViewProps> = () => {
	const { state } = useLocation();

	return (
		<>
			<Typography
				gutterBottom
				variant='h5'
			>
				Gallery Title: {state.galleryTitle}
			</Typography>
			<Box
				display='grid'
				gap={2}
				gridTemplateColumns='repeat(auto-fill, minmax(150px, 1fr))'
			>
				{state.images.map(
					(image: { url: string; description?: string }, index: number) => (
						<Box
							key={index}
							textAlign='center'
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
						</Box>
					),
				)}
			</Box>
		</>
	);
};
