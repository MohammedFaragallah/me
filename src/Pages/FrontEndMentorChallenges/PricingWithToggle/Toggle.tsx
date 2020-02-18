import { Grid, Switch as MuiSwitch, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import React, { useState } from 'react';

const Switch = withStyles(theme => ({
	root: {
		width: 28,
		height: 16,
		padding: 0,
		display: 'flex',
	},
	switchBase: {
		padding: 2,
		color: theme.palette.grey[500],
		'&$checked': {
			transform: 'translateX(12px)',
			color: theme.palette.common.white,
			'& + $track': {
				opacity: 1,
				backgroundColor: theme.palette.primary.main,
				borderColor: theme.palette.primary.main,
			},
		},
	},
	thumb: {
		width: 12,
		height: 12,
		boxShadow: 'none',
	},
	track: {
		border: `1px solid ${theme.palette.grey[500]}`,
		borderRadius: 16 / 2,
		opacity: 1,
		backgroundColor: theme.palette.common.white,
	},
	checked: {},
}))(MuiSwitch);

export const Toggle = () => {
	const [toggle, setToggle] = useState(true);
	return (
		<Typography component="div">
			<Grid component="label" container alignItems="center" spacing={1}>
				<Grid item>Annually</Grid>
				<Grid item>
					<Switch checked={toggle} onChange={() => setToggle(!toggle)} />
				</Grid>
				<Grid item>Monthly</Grid>
			</Grid>
		</Typography>
	);
};
