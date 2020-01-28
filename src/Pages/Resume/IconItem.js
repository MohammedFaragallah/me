import { ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Typography } from 'Components';
import React from 'react';

const useStyles = makeStyles(theme => {
	const { spacing } = theme;

	return {
		contactItem: { margin: [[spacing(1), 0]] },
		contactItemText: {
			fontFamily: 'Brothers',
			fontSize: 18,
			marginLeft: spacing(2),
		},
	};
});

export const IconItem = props => {
	const { icon, alt, text } = props;
	const classes = useStyles();

	return (
		<ListItem button disableGutters className={classes.contactItem}>
			<img src={icon} alt={alt} width={25} />
			<Typography className={classes.contactItemText}>{text}</Typography>
		</ListItem>
	);
};
