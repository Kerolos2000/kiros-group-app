import Brightness2Icon from '@mui/icons-material/Brightness2Outlined';
import Brightness7Icon from '@mui/icons-material/Brightness7Outlined';
import { Box, useTheme } from '@mui/material';
import React from 'react';
import { Mode } from 'src/constants';
import { useChangeMode } from 'src/hooks';

export interface ToggleButtonProps {}

export const ToggleButton: React.FC<ToggleButtonProps> = () => {
	const theme = useTheme();
	const { mode, setMode } = useChangeMode();
	const isDark = mode === Mode.dark;

	const toggleSwitch = () => {
		setMode(isDark ? Mode.light : Mode.dark);
	};

	return (
		<Box
			className='switch'
			onClick={toggleSwitch}
			sx={{
				alignItems: 'center',
				backgroundColor: isDark
					? theme.palette.info.dark
					: theme.palette.warning.light,
				borderRadius: theme.shape.borderRadius * 5,
				boxShadow: theme.shadows[5],
				display: 'flex',
				height: theme.spacing(4),
				justifyContent: isDark ? 'flex-end' : 'flex-start',
				padding: theme.spacing(0.5),
				transition: 'all 0.5s ease',
				width: theme.spacing(10),
			}}
		>
			<Box
				onClick={toggleSwitch}
				sx={{
					alignItems: 'center',
					backgroundColor: isDark
						? theme.palette.info.main
						: theme.palette.warning.main,
					borderRadius: '50%',
					cursor: 'pointer',
					display: 'flex',
					height: theme.spacing(3),
					justifyContent: 'center',
					width: theme.spacing(3),
				}}
			>
				{isDark ? (
					<Brightness2Icon
						fontSize='small'
						sx={{ color: theme.palette.common.white }}
					/>
				) : (
					<Brightness7Icon
						fontSize='small'
						sx={{ color: theme.palette.common.black }}
					/>
				)}
			</Box>
		</Box>
	);
};
