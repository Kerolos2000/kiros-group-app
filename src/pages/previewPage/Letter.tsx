import { Typography } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';

export interface LetterProps {}

export const Letter: React.FC<LetterProps> = () => {
	const { state } = useLocation();

	return (
		<>
			<Typography>Sender's Name: {state.senderName}</Typography>
			<Typography>Recipient's Name: {state.recipientName}</Typography>
			<Typography>Date: {state.date}</Typography>
			<Typography>Letter Body: {state.letterBody}</Typography>
		</>
	);
};
