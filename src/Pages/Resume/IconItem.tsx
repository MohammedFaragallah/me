import { ListItem, Typography, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => {
	const { spacing } = theme;

	return {
		contactItem: {
			margin: spacing(1, 0),
		},
		contactItemText: {
			fontFamily: 'Brothers',
			fontSize: 18,
			marginLeft: spacing(2),
		},
	};
});

interface Props {
	icon: string;
	alt: string;
	text: string;
}

export const IconItem = (props: Props) => {
	const { icon, alt, text } = props;
	const classes = useStyles();

	return (
		<ListItem button className={classes.contactItem} disableGutters>
			<img alt={alt} src={icon} width={25} />
			<Typography className={classes.contactItemText}>{text}</Typography>
		</ListItem>
	);
};
