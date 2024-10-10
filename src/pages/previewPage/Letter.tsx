import { Typography } from '@mui/material';
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
	const { state } = useLocation();
	const { navigateToPreview } = useNavigateToPreview();

	const { data = state, onEdit } = props;
	const { date, letterBody, recipientName, senderName } = data;

	return (
		<>
			<Typography>Sender's Name: {senderName}</Typography>
			<Typography>Recipient's Name: {recipientName}</Typography>
			<Typography>Date: {date}</Typography>
			<Typography>Letter Body: {letterBody}</Typography>
			<PreviewActions
				data={data}
				onEdit={onEdit}
				onPreview={() => navigateToPreview(data, Templates.letter)}
			/>
		</>
	);
};
