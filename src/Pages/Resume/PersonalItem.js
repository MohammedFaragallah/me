import { Divider, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Typography } from 'Components';
import React from 'react';

const useStyles = makeStyles(theme => {
	const { spacing, palette } = theme;

	return {
		personalItem: {
			margin: [[spacing(1), 0]],
		},
		personalItemText: {
			fontWeight: 'bold',
			fontSize: 15,
			width: '45%',
		},
		divider: { backgroundColor: palette.grey['A200'] },
	};
});

export const PersonalItem = props => {
	const { title, text } = props;
	const classes = useStyles();

	return (
		<>
			<ListItem button disableGutters className={classes.personalItem}>
				<Typography className={classes.personalItemText}>{title}</Typography>
				<Typography className={classes.personalItemText}>: {text}</Typography>
			</ListItem>
			<Divider className={classes.divider} />
		</>
	);
};
