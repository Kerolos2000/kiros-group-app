import { CssBaseline } from '@mui/material';
import { Analytics } from '@vercel/analytics/react';
import React from 'react';
import { RouterProvider } from 'react-router-dom';

import { ThemeProvider } from './providers';
import { router } from './router';
import { GlobalStyles } from './themes';
export interface AppProps {}

export const App: React.FC<AppProps> = () => {
	return (
		<ThemeProvider>
			<Analytics />
			<CssBaseline />
			<GlobalStyles />
			<RouterProvider router={router} />
		</ThemeProvider>
	);
};
