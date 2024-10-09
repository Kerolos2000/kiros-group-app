import { createBrowserRouter } from 'react-router-dom';
import { Routes } from 'src/constants';
import { Layout } from 'src/layout';
import {
	DummyData,
	Home,
	PreviewPage,
	SavedTemplatesPage,
	TemplateForm,
} from 'src/pages';

export const router = createBrowserRouter([
	{
		children: [
			{
				element: <Home />,
				path: Routes.Home,
			},
			{
				element: <TemplateForm />,
				path: Routes.Form,
			},
			{
				element: <PreviewPage />,
				path: Routes.Preview,
			},
			{
				element: <SavedTemplatesPage />,
				path: Routes.SavedTemplates,
			},
			{
				element: <DummyData />,
				path: Routes.DummyData,
			},
		],
		element: <Layout />,
	},
]);
