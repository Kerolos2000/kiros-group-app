import React from 'react';
import { RouterProvider } from 'react-router-dom';

import { ThemeProvider } from './providers';
import { router } from './router';
export interface AppProps {}

export const App: React.FC<AppProps> = () => {
	return (
		<ThemeProvider>
			<RouterProvider router={router} />
		</ThemeProvider>
	);
};
