import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import { baseTheme } from 'Theme/base';

export const getTheme = dir => {
	const ThemeOptions = baseTheme({ dir });
	const theme = responsiveFontSizes(createMuiTheme(ThemeOptions));

	return { ...theme, overrides: {} };
};
