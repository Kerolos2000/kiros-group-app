import React from 'react';
import { useLocation } from 'react-router-dom';
import { StyledForm } from 'src/components';
import { Templates } from 'src/constants';

import { NotFoundPage } from '../NotFoundPage';
import { BusinessCardPreview } from './BusinessCardPreview';
import { GalleryViewPreview } from './GalleryViewPreview';
import { LetterPreview } from './LetterPreview';

export interface PreviewPageProps {}

export const PreviewPage: React.FC<PreviewPageProps> = () => {
	const location = useLocation();
	const { state } = location;

	if (!state) {
		return <NotFoundPage />;
	}

	const renderTemplate = () => {
		switch (state.template) {
			case Templates.businessCard:
				return <BusinessCardPreview />;
			case Templates.galleryView:
				return <GalleryViewPreview />;
			case Templates.letter:
				return <LetterPreview />;
		}
	};

	return <StyledForm>{renderTemplate()}</StyledForm>;
};
