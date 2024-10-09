import MenuIcon from '@mui/icons-material/Menu';
import {
	Box,
	IconButton,
	Menu,
	MenuItem,
	AppBar as MuiAppBar,
	Toolbar,
	Typography,
} from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { ToggleButton } from 'src/components';
import { Routes } from 'src/constants';

export interface AppBarProps {}

const links = [
	{ name: 'Home', path: Routes.Home },
	{ name: 'Saved Templates', path: Routes.SavedTemplates },
	{ name: 'Dummy Data', path: Routes.DummyData },
];

export const AppBar: React.FC<AppBarProps> = () => {
	const navigate = useNavigate();

	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
		null,
	);
	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleClickMenu = (path: string) => {
		navigate(`${path}`);
		setAnchorElNav(null);
	};

	return (
		<MuiAppBar sx={{ position: 'initial', px: 2 }}>
			<Toolbar disableGutters>
				<Typography
					onClick={() => window.scrollTo({ behavior: 'smooth', top: 0 })}
					variant='h6'
				>
					kirosGroup
				</Typography>
				<Box sx={{ flexGrow: 1 }} />
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
					<MenuIcon color='secondary' />
				</IconButton>

				<Menu
					anchorEl={anchorElNav}
					onClose={() => setAnchorElNav(null)}
					open={Boolean(anchorElNav)}
					sx={{
						display: { md: 'none', xs: 'block' },
					}}
				>
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

					<MenuItem>
						<ToggleButton />
					</MenuItem>
				</Menu>

				<Box sx={{ display: { md: 'flex', xs: 'none' } }}>
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
					<ToggleButton />
				</Box>
			</Toolbar>
		</MuiAppBar>
	);
};
