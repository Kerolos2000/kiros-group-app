import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';

export interface LayoutProps {}

export const Layout: React.FC<React.PropsWithChildren<LayoutProps>> = () => {
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
			<Outlet />
		</Box>
	);
};
