import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export interface NotFoundPageProps {}

export const NotFoundPage: React.FC<NotFoundPageProps> = () => {
	const navigate = useNavigate();

	const handleGoBack = () => {
		navigate(-1);
	};

	return (
		<Box
			sx={{
				alignItems: 'center',
				display: 'flex',
				flex: 1,
				flexDirection: 'column',
				justifyContent: 'center',
				textAlign: 'center',
			}}
		>
			<Typography
				color='error'
				gutterBottom
				variant='h1'
			>
				404
			</Typography>
			<Typography
				gutterBottom
				variant='h5'
			>
				Page Not Found
			</Typography>
			<Button
				onClick={handleGoBack}
				variant='contained'
			>
				Go Back
			</Button>
		</Box>
	);
};
