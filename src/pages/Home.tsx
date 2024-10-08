import { Box, Typography } from '@mui/material';
import React from 'react';

export interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
	return (
		<Box>
			<Typography>Home</Typography>
		</Box>
	);
};
