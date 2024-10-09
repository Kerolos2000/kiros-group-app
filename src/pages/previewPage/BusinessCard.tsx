import { Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

export interface BusinessCardProps {}

export const BusinessCard: React.FC<BusinessCardProps> = () => {
	const { state } = useLocation();
	const { email, jobTitle, name, phone, website } = state;

	return (
		<>
			<Typography>Name: {name}</Typography>
			<Typography>Job Title: {jobTitle}</Typography>
			<Typography>Email: {email}</Typography>
			<Typography>Phone: {phone}</Typography>
			<Typography>Website: {website}</Typography>
		</>
	);
};
