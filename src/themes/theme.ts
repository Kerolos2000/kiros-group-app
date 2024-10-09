import { ThemeOptions } from '@mui/material';

export const darkTheme: ThemeOptions = {
	palette: {
		background: {
			default: '#020f1b',
			paper: '#010b15',
		},
		common: {
			black: '#000000',
			white: '#e0e0e0',
		},
		info: {
			dark: '#002e47',
			main: '#005989',
		},
		mode: 'dark',
		primary: {
			contrastText: '#e0e0e0',
			dark: '#335d73',
			light: '#89c5dc',
			main: '#259cc4',
		},
		secondary: {
			contrastText: '#ffffff',
			dark: '#1f4b5e',
			light: '#a8d8e8',
			main: '#5ca8c9',
		},
		text: {
			primary: '#e0e0e0',
			secondary: '#cfd8dc',
		},
	},
	shape: {
		borderRadius: 8,
	},
};

export const lightTheme: ThemeOptions = {
	palette: {
		background: {
			default: '#e9f6ff',
			paper: '#dfefff',
		},
		common: {
			black: '#2C3E50',
			white: '#ffffff',
		},
		mode: 'light',
		primary: {
			contrastText: '#ffffff',
			dark: '#4c8ea3',
			light: '#b0e4f2',
			main: '#006180',
		},
		secondary: {
			contrastText: '#ffffff',
			dark: '#508fa5',
			light: '#c4edf5',
			main: '#99d2e6',
		},
		text: {
			primary: '#2C3E50',
			secondary: '#6f797b',
		},
		warning: {
			dark: '#FFB300',
			light: '#ffe2b7',
			main: '#ffb13c',
		},
	},
	shape: {
		borderRadius: 8,
	},
};
