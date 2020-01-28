import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import color from 'color';
import { Typography } from 'Components';
import React from 'react';

const useStyles = makeStyles(theme => {
	const { spacing, palette } = theme;

	return {
		sectionHeading: {
			marginBottom: spacing(8),
			textTransform: 'uppercase',
			// TODO: test https://github.com/mistic100/tinygradient
			backgroundImage: `linear-gradient(to right,
				${color(palette.secondary.dark)},
				${color(palette.secondary.main)})`,
			'-webkit-background-clip': 'text',
			color: 'transparent',
			fontWeight: 700,
			fontSize: spacing(4),
			transition: 'all 0.7s',
			'&:hover': {
				transform: 'scale(1.01 )',
				backgroundImage: `linear-gradient(to right,
					${color(palette.secondary.dark)},
					${color(palette.secondary.main)})`,
				textShadow: `${spacing(1)}px ${spacing(2)}px ${spacing(4)}px ${
					palette.primary.light
				}`,
			},
		},
	};
});

const SectionHeading = props => {
	const { label, className, ...rest } = props;
	const classes = useStyles();

	return (
		<Typography
			align="center"
			className={clsx(className, classes.sectionHeading)}
			{...rest}
		>
			{label}
		</Typography>
	);
};

export default SectionHeading;
