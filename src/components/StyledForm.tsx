import { Box, BoxProps, Card, useTheme } from '@mui/material';
import React, { PropsWithChildren } from 'react';

export interface StyledFormProps extends BoxProps {}

export const StyledForm: React.FC<
	PropsWithChildren<StyledFormProps>
> = props => {
	const { children, onSubmit, sx } = props;

	const theme = useTheme();

	return (
		<Box
			onSubmit={onSubmit}
			sx={{
				alignItems: 'center',
				display: 'flex',
				flex: 1,
				justifyContent: 'center',
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
					maxWidth: theme.breakpoints.values.md,
					p: 2,
					width: '100%',
				}}
			>
				{children}
			</Card>
		</Box>
	);
};
