import { Box, Typography } from '@mui/material';
import React from 'react';

export interface AppProps {}

export const App: React.FC<AppProps> = () => {
	return (
		<Box>
			<Typography>App</Typography>
		</Box>
	);
};
