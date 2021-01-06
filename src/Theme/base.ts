import { SimplePaletteColorOptions } from '@material-ui/core/styles/createPalette';
import color from 'color';

import { Direction } from 'localization/types';

const colorToPalette = (
	main: string,
	variance = 0.5,
): SimplePaletteColorOptions => ({
	main,
	light: String(color(main).lighten(variance)),
	dark: String(color(main).darken(variance)),
});

interface Props {
	dir: Direction;
	secondary?: string;
	primary?: string;
}

export const baseTheme = (props: Props) => {
	const { dir, secondary = '#fcc600', primary = '#2D2A32' } = props;

	const themeOpt = {
		direction: dir,
		palette: {
			secondary: colorToPalette(secondary),
			primary: colorToPalette(primary),
		},
	};

	return themeOpt;
};
