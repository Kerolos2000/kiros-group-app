import { Box, Grid2, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { EllipsisTypography, StyledForm } from 'src/components';
import { Routes, Templates } from 'src/constants';
import { useStore } from 'src/hooks';

import { BusinessCard, GalleryView, Letter } from './previewPage';
import {
	BusinessCardFormTypes,
	GalleryFormTypes,
	LetterFormTypes,
} from './templateForm';

export type AllDataTypes =
	| BusinessCardFormTypes
	| GalleryFormTypes
	| LetterFormTypes;

export const SavedTemplatesPage: React.FC = () => {
	const { businessCardData, galleryData, letterData } = useStore();
	const navigate = useNavigate();

	const handleEdit = (templateType: string, data: AllDataTypes) => {
		let path = '';
		switch (templateType) {
			case Templates.businessCard:
				path = `/${Routes.Form}?template=${Templates.businessCard}`;
				break;
			case Templates.galleryView:
				path = `/${Routes.Form}?template=${Templates.galleryView}`;
				break;
			case Templates.letter:
				path = `/${Routes.Form}?template=${Templates.letter}`;
				break;
			default:
				break;
		}
		navigate(path, {
			state: { ...data },
		});
	};

	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
			{!businessCardData.length && !galleryData.length && !letterData.length ? (
				<Typography>No saved templates found.</Typography>
			) : (
				<>
					{businessCardData.length > 0 && (
						<>
							<EllipsisTypography>Business Cards</EllipsisTypography>
							<Grid2
								container
								spacing={2}
							>
								{businessCardData.map(data => (
									<Grid2
										key={JSON.stringify(data)}
										size={{ md: 4, sm: 6, xs: 12 }}
									>
										<StyledForm sx={{ p: 0 }}>
											<BusinessCard
												data={data}
												key={JSON.stringify(data)}
												onEdit={data =>
													handleEdit(Templates.businessCard, data)
												}
											/>
										</StyledForm>
									</Grid2>
								))}
							</Grid2>
						</>
					)}

					{galleryData.length > 0 && (
						<>
							<EllipsisTypography>Galleries</EllipsisTypography>
							<Grid2
								container
								spacing={2}
							>
								{galleryData.map(data => (
									<Grid2
										key={JSON.stringify(data)}
										size={{ md: 4, sm: 6, xs: 12 }}
									>
										<StyledForm sx={{ p: 0 }}>
											<GalleryView
												data={data}
												key={JSON.stringify(data)}
												onEdit={data => handleEdit(Templates.galleryView, data)}
											/>
										</StyledForm>
									</Grid2>
								))}
							</Grid2>
						</>
					)}

					{letterData.length > 0 && (
						<>
							<EllipsisTypography>Letters</EllipsisTypography>
							<Grid2
								container
								spacing={2}
							>
								{letterData.map(data => (
									<Grid2
										key={JSON.stringify(data)}
										size={{ md: 4, sm: 6, xs: 12 }}
									>
										<StyledForm sx={{ p: 0 }}>
											<Letter
												data={data}
												key={JSON.stringify(data)}
												onEdit={data => handleEdit(Templates.letter, data)}
											/>
										</StyledForm>
									</Grid2>
								))}
							</Grid2>
						</>
					)}
				</>
			)}
		</Box>
	);
};
