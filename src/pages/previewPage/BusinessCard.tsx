import { Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

export interface BusinessCardProps {}

export const BusinessCard: React.FC<BusinessCardProps> = () => {
	const { state } = useLocation();

	return (
		<>
			<Typography>Name: {state.name}</Typography>
			<Typography>Job Title: {state.jobTitle}</Typography>
			<Typography>Email: {state.email}</Typography>
			<Typography>Phone: {state.phone}</Typography>
			<Typography>Website: {state.website}</Typography>
		</>
	);
};
