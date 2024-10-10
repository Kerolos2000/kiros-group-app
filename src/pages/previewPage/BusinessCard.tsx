import { Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { PreviewActions } from 'src/components';
import { Templates } from 'src/constants';
import { useNavigateToPreview } from 'src/hooks';

import { BusinessCardFormTypes } from '../templateForm';

export interface BusinessCardProps {
	data?: BusinessCardFormTypes;
	onEdit?: (data: BusinessCardFormTypes) => void;
}

export const BusinessCard: React.FC<BusinessCardProps> = props => {
	const { state } = useLocation();
	const { navigateToPreview } = useNavigateToPreview();

	const { data = state, onEdit } = props;
	const { email, jobTitle, name, phone, website } = data;

	return (
		<>
			<Typography>Name: {name}</Typography>
			<Typography>Job Title: {jobTitle}</Typography>
			<Typography>Email: {email}</Typography>
			<Typography>Phone: {phone}</Typography>
			<Typography>Website: {website}</Typography>
			<PreviewActions
				data={data}
				onEdit={onEdit}
				onPreview={() => navigateToPreview(data, Templates.businessCard)}
			/>
		</>
	);
};
