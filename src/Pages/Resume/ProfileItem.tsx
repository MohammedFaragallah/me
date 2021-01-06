import {
	LinearProgress,
	ListItem,
	Typography,
	makeStyles,
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => {
	const { spacing, palette } = theme;
	return {
		root: {
			height: 30,
			width: '100%',
			backgroundImage: `url(${require('./Icons/linePattern.png')})`,
			backgroundSize: 'repeat',
			position: 'absolute',
			zIndex: 50,
			borderRadius: 20,
		},
		bar: {
			borderRadius: 20,
			backgroundColor: palette.common.black,
		},
		profileItem: {
			position: 'relative',
			height: spacing(4),
			margin: spacing(1, 0),
		},
		title: {
			margin: spacing(2),
			color: palette.common.white,
			fontFamily: 'Brothers',
			// position: 'absolute',
			zIndex: 100,
		},
	};
});

interface Props {
	value: number;
	title: string;
}

export const ProfileItem = (props: Props) => {
	const { value, title } = props;
	const classes = useStyles();

	return (
		<ListItem button className={classes.profileItem} disableGutters>
			<Typography className={classes.title}>{title}</Typography>
			<LinearProgress
				classes={{ root: classes.root, bar: classes.bar }}
				value={value}
				variant="determinate"
			/>
		</ListItem>
	);
};
