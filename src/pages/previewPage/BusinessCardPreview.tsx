import { Box, Typography, useTheme } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { PreviewActions } from 'src/components';
import { Templates } from 'src/constants';
import { useNavigateToPreview } from 'src/hooks';

import { BusinessCardFormTypes } from '../templateForm';

export interface BusinessCardPreviewProps {
	data?: BusinessCardFormTypes;
	onEdit?: (data: BusinessCardFormTypes) => void;
}

export const BusinessCardPreview: React.FC<
	BusinessCardPreviewProps
> = props => {
	const theme = useTheme();
	const { state } = useLocation();
	const { navigateToPreview } = useNavigateToPreview();

	const { data = state, onEdit } = props;
	const { email, jobTitle, name, phone, website } = data;

	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
			<Typography
				sx={{
					color: theme.palette.text.primary,
					fontWeight: 'bold',
				}}
				variant='h5'
			>
				{name}
			</Typography>
			<Typography
				sx={{ color: theme.palette.text.secondary }}
				variant='h6'
			>
				{jobTitle}
			</Typography>
			<Typography sx={{ color: theme.palette.text.disabled }}>
				{email}
			</Typography>
			<Typography
				sx={{
					color: theme.palette.text.disabled,
				}}
			>
				{phone}
			</Typography>
			<Typography sx={{ color: theme.palette.text.disabled }}>
				{website}
			</Typography>
			<Box>
				<PreviewActions
					data={data}
					onEdit={onEdit}
					onPreview={() => navigateToPreview(data, Templates.businessCard)}
				/>
			</Box>
		</Box>
	);
};
