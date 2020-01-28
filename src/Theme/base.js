import color from 'color';

const colorToPalette = (main, variance = 0.5) => ({
	main,
	light: String(color(main).lighten(variance)),
	dark: String(color(main).darken(variance)),
});

export const baseTheme = props => {
	const { dir, secondary = '#fcc600', primary = '#2D2A32' } = props;

	const themeOpt = {
		direction: dir,
		palette: {
			secondary: colorToPalette(secondary),
			primary: colorToPalette(primary),
		},
		typography: {
			useNextVariants: true,
		},
	};

	return themeOpt;
};
