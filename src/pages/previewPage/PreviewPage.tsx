import { Typography } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { EllipsisTypography, StyledForm } from 'src/components';
import { Templates } from 'src/constants';

import { BusinessCard } from './BusinessCard';
import { GalleryView } from './GalleryView';
import { Letter } from './Letter';

export interface PreviewPageProps {}

export const PreviewPage: React.FC<PreviewPageProps> = () => {
	const location = useLocation();
	const { state } = location;

	if (!state) {
		return (
			<StyledForm>
				<EllipsisTypography>Invalid URL</EllipsisTypography>
			</StyledForm>
		);
	}

	const renderTemplate = () => {
		switch (state.template) {
			case Templates.businessCard:
				return <BusinessCard />;
			case Templates.galleryView:
				return <GalleryView />;
			case Templates.letter:
				return <Letter />;
			default:
				return <Typography>Invalid template type</Typography>;
		}
	};

	return <StyledForm>{renderTemplate()}</StyledForm>;
};
