import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Templates } from 'src/constants';

import { NotFoundPage } from '../NotFoundPage';
import { BusinessCardForm } from './BusinessCardForm';
import { GalleryViewForm } from './GalleryViewForm';
import { LetterForm } from './LetterForm';

export interface TemplateFormProps {}

export const TemplateForm: React.FC<TemplateFormProps> = () => {
	const [searchParams] = useSearchParams();
	const template = searchParams.get('template');

	const renderTemplateForm = () => {
		switch (template) {
			case Templates.businessCard:
				return <BusinessCardForm />;
			case Templates.galleryView:
				return <GalleryViewForm />;
			case Templates.letter:
				return <LetterForm />;
			default:
				return <NotFoundPage />;
		}
	};

	return <>{renderTemplateForm()}</>;
};
