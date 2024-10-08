import { Button, ButtonGroup } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { EllipsisTypography, StyledForm } from 'src/components';
import { Routes, Templates } from 'src/constants';

export interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
	const navigate = useNavigate();

	return (
		<StyledForm>
			<EllipsisTypography>Choose Template</EllipsisTypography>
			<ButtonGroup variant='contained'>
				<Button
					onClick={() =>
						navigate(`/${Routes.Form}?template=${Templates.businessCard}`)
					}
					variant='outlined'
				>
					Business Card
				</Button>
				<Button
					onClick={() =>
						navigate(`/${Routes.Form}?template=${Templates.galleryView}`)
					}
					variant='outlined'
				>
					Gallery View
				</Button>
				<Button
					onClick={() =>
						navigate(`/${Routes.Form}?template=${Templates.letter}`)
					}
					variant='outlined'
				>
					Letter
				</Button>
			</ButtonGroup>
		</StyledForm>
	);
};
