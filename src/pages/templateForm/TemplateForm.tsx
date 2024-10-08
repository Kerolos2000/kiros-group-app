import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { EllipsisTypography, StyledForm } from 'src/components';
import { Templates } from 'src/constants';

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
				return (
					<StyledForm>
						<EllipsisTypography>Invalid template selected.</EllipsisTypography>
					</StyledForm>
				);
		}
	};

	return <>{renderTemplateForm()}</>;
};
