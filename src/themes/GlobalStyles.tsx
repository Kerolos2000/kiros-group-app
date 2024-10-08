import { GlobalStyles as MuiGlobalStyles, useTheme } from '@mui/material';
import React from 'react';

export interface GlobalStylesProps {}

export const GlobalStyles: React.FC<GlobalStylesProps> = () => {
	const theme = useTheme();

	return (
		<MuiGlobalStyles
			styles={{
				'.modal-dialog': {
					zIndex: 10,
				},
				'.MuiDrawer-paper': {
					'::-webkit-scrollbar': {
						width: theme.spacing(0.5),
					},
					'::-webkit-scrollbar-thumb': {
						backgroundColor: theme.palette.primary.dark,
					},
				},
				'*': {
					direction: 'ltr',
				},
				'*::-webkit-scrollbar': {
					width: theme.spacing(1),
				},
				'*::-webkit-scrollbar-thumb': {
					backgroundColor: theme.palette.primary.dark,
				},
				'#root': {
					display: 'flex',
					flexDirection: 'column',
					minHeight: '100vh',
				},
				body: {
					overFlowX: 'hidden',
				},
			}}
		/>
	);
};
