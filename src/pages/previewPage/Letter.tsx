import { Button, Typography } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';

import { LetterFormTypes } from '../templateForm';

export interface LetterProps {
	data?: LetterFormTypes;
	onEdit?: (data: LetterFormTypes) => void;
}

export const Letter: React.FC<LetterProps> = props => {
	const { state } = useLocation();

	const { data = state, onEdit } = props;
	const { date, letterBody, recipientName, senderName } = data;

	return (
		<>
			<Typography>Sender's Name: {senderName}</Typography>
			<Typography>Recipient's Name: {recipientName}</Typography>
			<Typography>Date: {date}</Typography>
			<Typography>Letter Body: {letterBody}</Typography>
			{onEdit && (
				<Button
					onClick={() => onEdit(data)}
					variant='contained'
				>
					Edit
				</Button>
			)}
		</>
	);
};
