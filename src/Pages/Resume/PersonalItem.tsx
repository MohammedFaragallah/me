import { Divider, ListItem, Typography, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => {
	const { spacing, palette } = theme;

	return {
		personalItem: {
			margin: spacing(1, 0),
		},
		personalItemText: {
			fontWeight: 'bold',
			fontSize: 15,
			width: '45%',
		},
		divider: { backgroundColor: palette.grey['A200'] },
	};
});

interface Props {
	title: string;
	text: string;
}

export const PersonalItem = (props: Props) => {
	const { title, text } = props;
	const classes = useStyles();

	return (
		<>
			<ListItem button className={classes.personalItem} disableGutters>
				<Typography className={classes.personalItemText}>{title}</Typography>
				<Typography className={classes.personalItemText}>: {text}</Typography>
			</ListItem>
			<Divider className={classes.divider} />
		</>
	);
};
