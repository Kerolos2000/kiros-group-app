import { Box, Button, Grid2, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { EllipsisTypography, StyledForm } from 'src/components';
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

	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
			{!businessCardData.length && !galleryData.length && !letterData.length ? (
				<Typography>No saved templates found.</Typography>
			) : (
				<>
					{businessCardData.length > 0 && (
						<>
							<EllipsisTypography>Business Cards</EllipsisTypography>
							<Grid2
								container
								spacing={2}
							>
								{businessCardData.map(data => {
									const { email, jobTitle, name, phone, website } = data;
									return (
										<Grid2
											key={JSON.stringify(data)}
											size={{ md: 4, sm: 6, xs: 12 }}
										>
											<StyledForm sx={{ p: 0 }}>
												<Typography>Name: {name}</Typography>
												<Typography>Position: {jobTitle}</Typography>
												<Typography>Email: {email}</Typography>
												<Typography>Phone: {phone}</Typography>
												<Typography>Website: {website}</Typography>
												<Button
													onClick={() => handleEdit('businessCard', data)}
													sx={{ mt: 2 }}
													variant='contained'
												>
													Edit
												</Button>
											</StyledForm>
										</Grid2>
									);
								})}
							</Grid2>
						</>
					)}

					{galleryData.length > 0 && (
						<>
							<EllipsisTypography>Galleries</EllipsisTypography>
							<Grid2
								container
								spacing={2}
							>
								{galleryData.map(data => {
									const { galleryTitle, images } = data;
									return (
										<Grid2
											key={JSON.stringify(data)}
											size={{ md: 4, sm: 6, xs: 12 }}
										>
											<StyledForm sx={{ p: 0 }}>
												<EllipsisTypography>{galleryTitle}</EllipsisTypography>
												<Grid2
													container
													spacing={2}
												>
													{images.map((image, j) => (
														<Grid2
															component='img'
															key={j}
															size={{ sm: 6 }}
															src={image.url}
															sx={{ width: '50%' }}
														/>
													))}
												</Grid2>
												<Button
													onClick={() => handleEdit('gallery', data)}
													sx={{ mt: 2 }}
													variant='contained'
												>
													Edit
												</Button>
											</StyledForm>
										</Grid2>
									);
								})}
							</Grid2>
						</>
					)}

					{letterData.length > 0 && (
						<>
							<EllipsisTypography>Letters</EllipsisTypography>
							<Grid2
								container
								spacing={2}
							>
								{letterData.map(data => {
									const { recipientName, senderName } = data;
									return (
										<Grid2
											key={JSON.stringify(data)}
											size={{ md: 4, sm: 6, xs: 12 }}
										>
											<StyledForm sx={{ p: 0 }}>
												<Typography>Sender: {senderName}</Typography>
												<Typography>Recipient: {recipientName}</Typography>
												<Button
													onClick={() => handleEdit('letter', data)}
													sx={{ mt: 2 }}
													variant='contained'
												>
													Edit
												</Button>
											</StyledForm>
										</Grid2>
									);
								})}
							</Grid2>
						</>
					)}
				</>
			)}
		</Box>
	);
};
