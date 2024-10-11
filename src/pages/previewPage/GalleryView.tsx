import { Box, Grid2, Typography, useTheme } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { PreviewActions } from 'src/components';
import { Templates } from 'src/constants';
import { useNavigateToPreview } from 'src/hooks';

import { GalleryFormTypes } from '../templateForm';

interface Image {
	url: string;
	description?: string;
}

export interface GalleryViewProps {
	data?: GalleryFormTypes;
	onEdit?: (data: GalleryFormTypes) => void;
	numberOfImages?: number;
}

export const GalleryView: React.FC<GalleryViewProps> = props => {
	const theme = useTheme();
	const { state } = useLocation();
	const { navigateToPreview } = useNavigateToPreview();

	const { data = state, numberOfImages = data.images.length, onEdit } = props;
	const { galleryTitle, images } = data;

	return (
		<>
			<Typography
				sx={{
					color: theme.palette.text.primary,
					fontWeight: 'bold',
				}}
				variant='h5'
			>
				{galleryTitle}
			</Typography>
			<Grid2
				container
				spacing={2}
			>
				{images.slice(0, numberOfImages).map((image: Image) => {
					const { description, url } = image;

					return (
						<Grid2
							key={JSON.stringify(image)}
							size={{ md: 4, sm: 6 }}
						>
							<Box
								alt={description}
								component='img'
								src={url}
								sx={{
									borderRadius: 1,
									boxShadow: theme.shadows[3],
									width: '100%',
								}}
							/>
							{description ? (
								<Typography
									sx={{
										color: theme.palette.text.secondary,
										mt: 1,
									}}
									variant='body2'
								>
									{description}
								</Typography>
							) : null}
						</Grid2>
					);
				})}
			</Grid2>
			<Box sx={{ marginTop: theme.spacing(2) }}>
				<PreviewActions
					data={data}
					onEdit={onEdit}
					onPreview={() => navigateToPreview(data, Templates.galleryView)}
				/>
			</Box>
		</>
	);
};
