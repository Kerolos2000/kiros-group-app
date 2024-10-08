import { Box, Typography } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { EllipsisTypography, StyledForm } from 'src/components';
import { Templates } from 'src/constants';

export interface PreviewPageProps {}

export const PreviewPage: React.FC<PreviewPageProps> = () => {
	const location = useLocation();
	const { state } = location;
	console.log('🚀 ~ state:', state);

	if (!state) {
		return (
			<StyledForm>
				<EllipsisTypography>Invalid URL</EllipsisTypography>
			</StyledForm>
		);
	}

	const renderTemplate = () => {
		switch (state.template) {
			case Templates.businessCard:
				return (
					<>
						<Typography>Name: {state.name}</Typography>
						<Typography>Job Title: {state.jobTitle}</Typography>
						<Typography>Email: {state.email}</Typography>
						<Typography>Phone: {state.phone}</Typography>
						<Typography>Website: {state.website}</Typography>
					</>
				);
			case Templates.galleryView:
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
								(
									image: { url: string; description?: string },
									index: number,
								) => (
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
											<Typography variant='body2'>
												{image.description}
											</Typography>
										)}
									</Box>
								),
							)}
						</Box>
					</>
				);
			case Templates.letter:
				return (
					<>
						<Typography>Sender's Name: {state.senderName}</Typography>
						<Typography>Recipient's Name: {state.recipientName}</Typography>
						<Typography>Date: {state.date}</Typography>
						<Typography>Letter Body: {state.letterBody}</Typography>
					</>
				);
			default:
				return <Typography>Invalid template type</Typography>;
		}
	};

	return (
		<>
			<StyledForm>{renderTemplate()}</StyledForm>
		</>
	);
};
