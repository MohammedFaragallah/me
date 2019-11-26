import { createMuiTheme } from '@material-ui/core';
import { baseTheme } from 'Theme/base';

export const getTheme = dir => {
	const ThemeOptions = baseTheme(dir);
	const theme = createMuiTheme(ThemeOptions);

	return { ...theme, overrides: {} };
};
