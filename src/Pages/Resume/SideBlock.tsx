import {
	Divider,
	List,
	ListProps,
	Typography,
	makeStyles,
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => {
	const { spacing, palette } = theme;

	return {
		leftHeading: {
			fontFamily: 'Brothers',
			marginBottom: spacing(1),
			letterSpacing: 5,
			lineHeight: 2,
			fontWeight: 600,
		},
		divider: {
			backgroundColor: palette.common.black,
			height: 2,
		},
	};
});

interface Props extends ListProps {
	label: string;
	data: any[];
	item: any;
}

export const SideBlock: React.FC<Props> = props => {
	const { label, children, data, item, ...rest } = props;
	const classes = useStyles();

	return (
		<>
			<List
				dense
				subheader={
					<>
						<Typography className={classes.leftHeading}>{label}</Typography>
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
