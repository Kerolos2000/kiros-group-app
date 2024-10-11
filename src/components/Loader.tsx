import { Box, CircularProgress } from '@mui/material';
import React from 'react';

import { EllipsisTypography } from './EllipsisTypography';

export interface LoaderProps {}

export const Loader: React.FC<LoaderProps> = () => {
	return (
		<Box
			sx={{
				alignItems: 'center',
				display: 'flex',
				flex: 1,
				flexDirection: 'column',
				gap: 2,
				justifyContent: 'center',
			}}
		>
			<CircularProgress size={130} />
			<EllipsisTypography>Loading...</EllipsisTypography>
		</Box>
	);
};
