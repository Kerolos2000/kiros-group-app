import { Button, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

import { BusinessCardFormTypes } from '../templateForm';

export interface BusinessCardProps {
	data?: BusinessCardFormTypes;
	onEdit?: (data: BusinessCardFormTypes) => void;
}

export const BusinessCard: React.FC<BusinessCardProps> = props => {
	const { state } = useLocation();

	const { data = state, onEdit } = props;
	const { email, jobTitle, name, phone, website } = data;

	return (
		<>
			<Typography>Name: {name}</Typography>
			<Typography>Job Title: {jobTitle}</Typography>
			<Typography>Email: {email}</Typography>
			<Typography>Phone: {phone}</Typography>
			<Typography>Website: {website}</Typography>
			{onEdit ? (
				<Button
					onClick={() => onEdit(data)}
					variant='contained'
				>
					Edit
				</Button>
			) : null}
		</>
	);
};
