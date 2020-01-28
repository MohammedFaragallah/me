import { LinearProgress, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Typography } from 'Components';
import React from 'react';

import Texture from './Icons/linePattern.png';

const useStyles = makeStyles(theme => {
	const { spacing, palette } = theme;
	return {
		root: {
			height: 30,
			width: '100%',
			backgroundImage: `url(${Texture})`,
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
			margin: [[spacing(1), 0]],
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

export const ProfileItem = props => {
	const { value, title } = props;
	const classes = useStyles();

	return (
		<ListItem button disableGutters className={classes.profileItem}>
			<Typography className={classes.title}>{title}</Typography>
			<LinearProgress
				classes={{ root: classes.root, bar: classes.bar }}
				value={value}
				variant="determinate"
			/>
		</ListItem>
	);
};
