import { Button, Stack, Typography } from '@mui/material';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Routes, Templates } from 'src/constants';

import { LetterFormTypes } from '../templateForm';

export interface LetterProps {
	data?: LetterFormTypes;
	onEdit?: (data: LetterFormTypes) => void;
}

export const Letter: React.FC<LetterProps> = props => {
	const navigate = useNavigate();
	const { state } = useLocation();

	const { data = state, onEdit } = props;
	const { date, letterBody, recipientName, senderName } = data;

	const Preview = (data: LetterFormTypes) => {
		navigate(`/${Routes.Preview}`, {
			state: {
				template: Templates.letter,
				...data,
			},
		});
	};

	return (
		<>
			<Typography>Sender's Name: {senderName}</Typography>
			<Typography>Recipient's Name: {recipientName}</Typography>
			<Typography>Date: {date}</Typography>
			<Typography>Letter Body: {letterBody}</Typography>
			{onEdit ? (
				<Stack
					direction='row'
					spacing={1}
				>
					<Button
						onClick={() => onEdit(data)}
						variant='contained'
					>
						Edit
					</Button>
					<Button
						onClick={() => Preview(data)}
						variant='outlined'
					>
						Preview
					</Button>
				</Stack>
			) : null}
		</>
	);
};
