import { Link, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import color from 'color';
import React from 'react';

const useStyles = makeStyles(theme => {
	const { spacing, palette } = theme;

	return {
		learnMore: {
			padding: spacing(2),
			'&:link,&:visited': {
				color: palette.secondary.main,
				display: 'inline-block',
				textDecoration: 'none',
				borderBottom: `1px solid ${palette.secondary.main}`,
				padding: spacing(0.5),
				transition: 'all 0.2s',
			},
			'&:hover': {
				backgroundColor: palette.primary.main,
				boxShadow: `0 ${spacing(3)}px ${spacing(6)}px ${color(
					palette.primary.main,
				).alpha(0.1)}`,
				transform: 'translateY(-2px)',
			},
			'&:active': {
				boxShadow: `0 ${spacing(3)}px ${spacing(6)}px ${color(
					palette.primary.main,
				).alpha(0.1)}`,
				transform: 'translateY(0)',
			},
		},
	};
});

const HoverLink = props => {
	const { label, className, ...rest } = props;
	const classes = useStyles();

	return (
		<Link className={clsx(className, classes.learnMore)} href="/" {...rest}>
			{label}
		</Link>
	);
};

export default HoverLink;
