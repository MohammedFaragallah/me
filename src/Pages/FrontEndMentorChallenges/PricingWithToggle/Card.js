import {
	Box,
	Button,
	Divider,
	List,
	ListItemText,
	Paper,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Typography } from 'Components';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => {
	const { spacing, zIndex } = theme;

	return {
		root: ({ featured }) => ({
			padding: [[spacing(featured ? 8 : 4), spacing(4)]],
			margin: [[spacing(2), spacing(featured ? -1 : 0)]],
			borderRadius: spacing(1),
			background: featured
				? 'linear-gradient(137deg, rgba(163,168,240,1) 0%, rgba(105,111,221,1) 100%)'
				: 'white ',
			color: featured ? 'white' : 'black',
			zIndex: featured ? zIndex.appBar : undefined,
		}),
		price: { fontSize: 72 },
		dollar: { fontSize: 48, marginRight: spacing(1) },
		cta: {},
		link: { textDecoration: 'none' },
		divider: { border: '2px solid green' },
	};
});

export const Card = props => {
	const { title, price, properties, callToAction, featured } = props;
	const classes = useStyles({ featured });

	return (
		<Paper
			component={Box}
			display="flex"
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			className={classes.root}
		>
			<Typography weight={700} size="big">
				{title}
			</Typography>
			<Box display="flex" alignItems="center">
				<Typography weight={700} className={classes.dollar}>
					$
				</Typography>
				<Typography weight={900} className={classes.price}>
					{price.annually}
				</Typography>
			</Box>
			<List style={{ width: '100%' }}>
				{properties.map(property => (
					<Fragment key={property}>
						<ListItemText primary={property} />
						<Divider className={classes.divider} variant="fullWidth" />
					</Fragment>
				))}
			</List>
			<Link className={classes.link} to={callToAction.to}>
				<Button fullWidth>{callToAction.label}</Button>
			</Link>
		</Paper>
	);
};
