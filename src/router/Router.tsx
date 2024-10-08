import { createBrowserRouter } from 'react-router-dom';
import { Routes } from 'src/constants';
import { Layout } from 'src/layout';
import { Home } from 'src/pages';

export const router = createBrowserRouter([
	{
		children: [
			{
				element: <Home />,
				path: Routes.Home,
			},
		],
		element: <Layout />,
	},
]);
