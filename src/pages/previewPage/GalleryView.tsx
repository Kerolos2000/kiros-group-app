import { Box, Grid2, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { PreviewActions } from 'src/components';
import { Templates } from 'src/constants';
import { useNavigateToPreview } from 'src/hooks';

import { GalleryFormTypes } from '../templateForm';

export interface GalleryViewProps {
	data?: GalleryFormTypes;
	onEdit?: (data: GalleryFormTypes) => void;
}

export const GalleryView: React.FC<GalleryViewProps> = props => {
	const { state } = useLocation();
	const { navigateToPreview } = useNavigateToPreview();

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
								{description ? (
									<Typography variant='body2'>{description}</Typography>
								) : null}
							</Grid2>
						);
					},
				)}
			</Grid2>
			<PreviewActions
				data={data}
				onEdit={onEdit}
				onPreview={() => navigateToPreview(data, Templates.galleryView)}
			/>
		</>
	);
};
