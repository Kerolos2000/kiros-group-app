import MenuIcon from '@mui/icons-material/Menu';
import {
	Box,
	IconButton,
	Menu,
	MenuItem,
	AppBar as MuiAppBar,
	Toolbar,
	Typography,
	useTheme,
} from '@mui/material';
import React, { MouseEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToggleButton } from 'src/components';
import { Routes } from 'src/constants';

export interface Links {
	name: string;
	path: Routes;
}

const links: Links[] = [
	{ name: 'Home', path: Routes.Home },
	{ name: 'Saved Templates', path: Routes.SavedTemplates },
	{ name: 'Dummy Data', path: Routes.DummyData },
];

export interface AppBarProps {}

export const AppBar: React.FC<AppBarProps> = () => {
	const theme = useTheme();
	const navigate = useNavigate();

	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
	const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleClickMenu = (path: string) => {
		navigate(path);
		setAnchorElNav(null);
	};

	const Links = () => {
		return (
			<>
				{links.map(link => {
					const { name, path } = link;

					return (
						<MenuItem
							key={JSON.stringify(link)}
							onClick={() => handleClickMenu(path)}
						>
							{name}
						</MenuItem>
					);
				})}
				<Box sx={{ px: 2 }}>
					<ToggleButton />
				</Box>
			</>
		);
	};

	return (
		<MuiAppBar sx={{ position: 'initial', px: 2 }}>
			<Toolbar
				disableGutters
				sx={{ justifyContent: 'space-between' }}
			>
				<Typography
					onClick={() => navigate(Routes.Home)}
					sx={{ cursor: 'pointer' }}
					variant='h6'
				>
					kirosGroup
				</Typography>

				<IconButton
					edge='end'
					onClick={handleOpenNavMenu}
					size='large'
					sx={{
						alignItems: 'center',
						display: { md: 'none', xs: 'flex' },
						justifyContent: 'center',
					}}
				>
					<MenuIcon sx={{ color: theme.palette.common.white }} />
				</IconButton>

				<Menu
					anchorEl={anchorElNav}
					onClose={() => setAnchorElNav(null)}
					open={Boolean(anchorElNav)}
					sx={{
						display: { md: 'none', xs: 'block' },
					}}
				>
					<Links />
				</Menu>

				<Box sx={{ display: { md: 'flex', xs: 'none' } }}>
					<Links />
				</Box>
			</Toolbar>
		</MuiAppBar>
	);
};
