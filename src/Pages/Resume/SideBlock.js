import { Divider, List } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Typography } from 'Components';
import React from 'react';

const useStyles = makeStyles(theme => {
	const { spacing, palette } = theme;

	return {
		leftHeading: {
			fontFamily: 'Brothers',
			marginBottom: spacing(1),
			letterSpacing: 5,
			lineHeight: 2,
		},
		divider: {
			backgroundColor: palette.common.black,
			height: 2,
		},
	};
});

export const SideBlock = props => {
	const { label, children, data, item, ...rest } = props;
	const classes = useStyles();
	return (
		<>
			<List
				dense
				subheader={
					<>
						<Typography
							weight={600}
							size="large"
							className={classes.leftHeading}
						>
							{label}
						</Typography>
						<Divider className={classes.divider} />
					</>
				}
				{...rest}
			>
				{data.map(item)} {children}
			</List>
		</>
	);
};
