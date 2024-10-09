import { Box, BoxProps, Card } from '@mui/material';
import React, { PropsWithChildren } from 'react';

export interface StyledFormProps extends BoxProps {}

export const StyledForm: React.FC<
	PropsWithChildren<StyledFormProps>
> = props => {
	const { children, onSubmit, sx } = props;

	return (
		<Box
			onSubmit={onSubmit}
			sx={{
				alignItems: 'center',
				display: 'flex',
				flex: 1,
				justifyContent: 'center',
				px: 2,
				...sx,
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
