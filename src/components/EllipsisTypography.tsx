import { Typography, TypographyProps } from '@mui/material';
import React, { PropsWithChildren } from 'react';

interface EllipsisTypographyProps extends TypographyProps {
	lines?: number;
}

export const EllipsisTypography: React.FC<
	PropsWithChildren<EllipsisTypographyProps>
> = props => {
	const { children, lines = 1, ...rest } = props;

	return (
		<Typography
			sx={{
				display: '-webkit-box',
				overflow: 'hidden',
				textOverflow: 'ellipsis',
				WebkitBoxOrient: 'vertical',
				WebkitLineClamp: lines,
			}}
			variant='h5'
			{...rest}
		>
			{children}
		</Typography>
	);
};
