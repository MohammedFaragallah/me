import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';

import { baseTheme } from 'Theme/base';
import { Language } from 'localization/types';

declare module '@material-ui/core/styles/createMuiTheme' {
	interface Theme {
		direction: Direction;
		// palette: Palette;
		// typography: Typography;
	}
	interface ThemeOptions {
		direction?: Direction;
		// palette?: PaletteOptions;
		// typography?: TypographyOptions | ((palette: Palette) => TypographyOptions);
	}
}

export const getTheme = (dir: Language['dir']) => {
	const theme = responsiveFontSizes(createMuiTheme(baseTheme({ dir })));

	return { ...theme, overrides: {} };
};
