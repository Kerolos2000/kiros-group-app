import { Box, Button, Grid2, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledForm } from 'src/components';
import { Routes, Templates } from 'src/constants';
import { useStore } from 'src/hooks';

export const SavedTemplatesPage: React.FC = () => {
	const { businessCardData, galleryData, letterData } = useStore();
	const navigate = useNavigate();

	const handleEdit = (templateType: string, data: any) => {
		let path = '';
		switch (templateType) {
			case 'businessCard':
				path = `/${Routes.Form}?template=${Templates.businessCard}`;
				break;
			case 'gallery':
				path = `/${Routes.Form}?template=${Templates.galleryView}`;
				break;
			case 'letter':
				path = `/${Routes.Form}?template=${Templates.letter}`;
				break;
			default:
				break;
		}
		navigate(path, {
			state: { ...data },
		});
	};

	console.log(businessCardData);

	return (
		<Box>
			{!businessCardData.length && !galleryData.length && !letterData.length ? (
				<Typography>No saved templates found.</Typography>
			) : (
				<Grid2
					container
					mt={2}
					spacing={2}
				>
					{businessCardData.map(data => (
						<Grid2
							key={JSON.stringify(data)}
							size={{ md: 4, sm: 6, xs: 12 }}
						>
							<StyledForm>
								<Typography>Name: {data.name}</Typography>
								<Typography>Position: {data.jobTitle}</Typography>
								<Typography>Email: {data.email}</Typography>
								<Typography>Phone: {data.phone}</Typography>
								<Typography>Website: {data.website}</Typography>
								<Button
									onClick={() => handleEdit('businessCard', data)}
									sx={{ mt: 2 }}
									variant='contained'
								>
									Edit
								</Button>
							</StyledForm>
						</Grid2>
					))}

					{galleryData.map(data => (
						<Grid2
							key={JSON.stringify(data)}
							size={{ md: 4, sm: 6, xs: 12 }}
						>
							<StyledForm>
								<Typography>Title: {data.galleryTitle}</Typography>
								<Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
									{data.images.map((image, j) => (
										<Box
											component='img'
											key={j}
											src={image.url}
											sx={{
												width: '50%',
											}}
										/>
									))}
								</Box>
								<Button
									onClick={() => handleEdit('gallery', data)}
									sx={{ mt: 2 }}
									variant='contained'
								>
									Edit
								</Button>
							</StyledForm>
						</Grid2>
					))}

					{letterData.map(data => (
						<Grid2
							key={JSON.stringify(data)}
							size={{ md: 4, sm: 6, xs: 12 }}
						>
							<StyledForm>
								<Typography>Sender: {data.senderName}</Typography>
								<Typography>Recipient: {data.recipientName}</Typography>
								<Button
									onClick={() => handleEdit('letter', data)}
									sx={{ mt: 2 }}
									variant='contained'
								>
									Edit
								</Button>
							</StyledForm>
						</Grid2>
					))}
				</Grid2>
			)}
		</Box>
	);
};
