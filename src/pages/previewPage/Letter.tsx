import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { PreviewActions } from 'src/components';
import { Templates } from 'src/constants';
import { useNavigateToPreview } from 'src/hooks';

import { LetterFormTypes } from '../templateForm';

export interface LetterProps {
	data?: LetterFormTypes;
	onEdit?: (data: LetterFormTypes) => void;
}

export const Letter: React.FC<LetterProps> = props => {
	const theme = useTheme();
	const { state } = useLocation();
	const { navigateToPreview } = useNavigateToPreview();

	const { data = state, onEdit } = props;
	const { date, letterBody, recipientName, senderName } = data;

	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
			<Typography
				sx={{
					color: theme.palette.text.primary,
					fontWeight: 'bold',
				}}
				variant='h5'
			>
				{senderName}
			</Typography>
			<Typography
				sx={{ color: theme.palette.text.primary }}
				variant='h6'
			>
				{recipientName}
			</Typography>
			<Typography sx={{ color: theme.palette.text.secondary }}>
				{date}
			</Typography>
			<Typography sx={{ color: theme.palette.text.secondary }}>
				{letterBody}
			</Typography>
			<Box>
				<PreviewActions
					data={data}
					onEdit={onEdit}
					onPreview={() => navigateToPreview(data, Templates.letter)}
				/>
			</Box>
		</Box>
	);
};
