import { Card, Typography, useTheme } from '@mui/material';

export interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
	const theme = useTheme();

	return (
		<Card
			elevation={5}
			sx={{
				backgroundColor: theme.palette.background.paper,
				color: theme.palette.primary.main,
				padding: theme.spacing(3),
				textAlign: 'center',
			}}
		>
			<Typography>2024 © All Rights Reserved</Typography>
		</Card>
	);
};
