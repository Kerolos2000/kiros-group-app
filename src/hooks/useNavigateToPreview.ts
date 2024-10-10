import { useNavigate } from 'react-router-dom';
import { Routes, Templates } from 'src/constants';

export interface UseNavigateToPreview<T> {
	data: T;
	template: Templates;
}

export const useNavigateToPreview = () => {
	const navigate = useNavigate();

	const navigateToPreview = <T>(data: T, template: Templates) => {
		navigate(`/${Routes.Preview}`, {
			state: {
				template: template,
				...data,
			},
		});
	};

	return { navigateToPreview };
};
