import { ThemeOptions } from '@mui/material';

export const darkTheme: ThemeOptions = {
	palette: {
		background: {
			default: '#121212',
			paper: '#0A0F11',
		},
		common: {
			black: '#000000',
			white: '#ffffff',
		},
		error: {
			contrastText: '#ffffff',
			main: '#d32f2f',
		},
		info: {
			contrastText: '#ffffff',
			main: '#0288d1',
		},
		mode: 'dark',
		primary: {
			contrastText: '#ffffff',
			dark: '#005b63',
			light: '#4dd3e3',
			main: '#009fb5',
		},
		secondary: {
			contrastText: '#ffffff',
			dark: '#40575c',
			light: '#d4eff4',
			main: '#536d73',
		},
		success: {
			contrastText: '#ffffff',
			main: '#2e7d32',
		},
		text: {
			disabled: 'rgba(255, 255, 255, 0.5)',
			primary: '#ffffff',
			secondary: '#cfd8dc',
		},
		warning: {
			contrastText: '#ffffff',
			main: '#ff9800',
		},
	},
	shape: {
		borderRadius: 8,
	},
};

export const lightTheme: ThemeOptions = {
	palette: {
		background: {
			default: '#f1ffff',
			paper: '#e1f9ff',
		},
		common: {
			black: '#000000',
			white: '#ffffff',
		},
		error: {
			contrastText: '#ffffff',
			main: '#ba1a1a',
		},
		info: {
			contrastText: '#ffffff',
			main: '#006688',
		},
		mode: 'light',
		primary: {
			contrastText: '#ffffff',
			dark: '#004e59',
			light: '#51d7ef',
			main: '#006876',
		},
		secondary: {
			contrastText: '#ffffff',
			dark: '#334a50',
			light: '#cde7ed',
			main: '#4a6268',
		},
		success: {
			contrastText: '#ffffff',
			main: '#006d43',
		},
		text: {
			disabled: 'rgba(25, 28, 29, 0.38)',
			primary: '#191c1d',
			secondary: '#6f797b',
		},
		warning: {
			contrastText: '#ffffff',
			main: '#795900',
		},
	},
	shape: {
		borderRadius: 8,
	},
};
