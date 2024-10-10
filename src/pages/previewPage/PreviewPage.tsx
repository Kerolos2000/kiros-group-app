import React from 'react';
import { useLocation } from 'react-router-dom';
import { StyledForm } from 'src/components';
import { Templates } from 'src/constants';

import { NotFoundPage } from '../NotFoundPage';
import { BusinessCard } from './BusinessCard';
import { GalleryView } from './GalleryView';
import { Letter } from './Letter';

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
				return <BusinessCard />;
			case Templates.galleryView:
				return <GalleryView />;
			case Templates.letter:
				return <Letter />;
		}
	};

	return <StyledForm>{renderTemplate()}</StyledForm>;
};
