import { Box, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => {
	const { palette } = theme;

	return {
		'@global': {
			body: {
				backgroundColor: palette.common.white,
			},
			'::selection': {
				backgroundColor: palette.secondary.main,
				color: palette.primary.main,
				textShadow: 'none',
			},
			'::-webkit-scrollbar': {
				width: 8,
			},
			'::-webkit-scrollbar-track': {
				boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)',
				borderRadius: 1,
			},
			'::-webkit-scrollbar-thumb': {
				borderRadius: 1,
				boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.5)',
			},
		},
		root: {
			minHeight: '100vh',
		},
	};
});

export const Layout: React.FC = props => {
	const { children } = props;
	const classes = useStyles();

	return (
		<Box id="top" bgcolor="common.white" className={classes.root}>
			{React.Children.only(children)}
		</Box>
	);
};
