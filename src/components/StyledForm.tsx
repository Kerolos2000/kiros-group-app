import { Box, Card } from '@mui/material';
import React, { PropsWithChildren } from 'react';

export interface StyledFormProps {
	onSubmit?: () => void;
}

export const StyledForm: React.FC<
	PropsWithChildren<StyledFormProps>
> = props => {
	const { children, onSubmit } = props;

	return (
		<Box
			component='form'
			onSubmit={onSubmit}
			sx={{
				alignItems: 'center',
				display: 'flex',
				height: '100vh',
				justifyContent: 'center',
				px: 2,
			}}
		>
			<Card
				elevation={5}
				sx={{
					alignItems: 'flex-start',
					display: 'flex',
					flexDirection: 'column',
					gap: 2,
					p: 4,
					width: 700,
				}}
			>
				{children}
			</Card>
		</Box>
	);
};
