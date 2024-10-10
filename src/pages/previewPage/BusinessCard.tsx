import { Button, Stack, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { Routes, Templates } from 'src/constants';

import { BusinessCardFormTypes } from '../templateForm';

export interface BusinessCardProps {
	data?: BusinessCardFormTypes;
	onEdit?: (data: BusinessCardFormTypes) => void;
}

export const BusinessCard: React.FC<BusinessCardProps> = props => {
	const navigate = useNavigate();
	const { state } = useLocation();

	const { data = state, onEdit } = props;
	const { email, jobTitle, name, phone, website } = data;

	const Preview = (data: BusinessCardFormTypes) => {
		navigate(`/${Routes.Preview}`, {
			state: {
				template: Templates.businessCard,
				...data,
			},
		});
	};

	return (
		<>
			<Typography>Name: {name}</Typography>
			<Typography>Job Title: {jobTitle}</Typography>
			<Typography>Email: {email}</Typography>
			<Typography>Phone: {phone}</Typography>
			<Typography>Website: {website}</Typography>
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
