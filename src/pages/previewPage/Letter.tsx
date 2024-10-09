import { Typography } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';

export interface LetterProps {}

export const Letter: React.FC<LetterProps> = () => {
	const { state } = useLocation();
	const { date, letterBody, recipientName, senderName } = state;

	return (
		<>
			<Typography>Sender's Name: {senderName}</Typography>
			<Typography>Recipient's Name: {recipientName}</Typography>
			<Typography>Date: {date}</Typography>
			<Typography>Letter Body: {letterBody}</Typography>
		</>
	);
};
