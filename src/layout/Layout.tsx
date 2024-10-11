import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';

import { AppBar } from './AppBar';
import { Footer } from './Footer';

export interface LayoutProps {}

export const Layout: React.FC<React.PropsWithChildren<LayoutProps>> = () => {
	return (
		<>
			<AppBar />
			<Box
				sx={{
					display: 'flex',
					flex: 1,
					flexDirection: 'column',
					height: '100%',
					p: 3,
				}}
			>
				<Outlet />
			</Box>
			<Footer />
		</>
	);
};
