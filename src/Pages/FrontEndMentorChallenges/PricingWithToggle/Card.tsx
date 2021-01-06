import {
	Box,
	Button,
	Divider,
	List,
	ListItemText,
	Paper,
	Theme,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { CardData } from './index';

interface StyleProps {
	featured: CardData['featured'];
}

const useStyles = makeStyles<Theme, StyleProps>(theme => {
	const { spacing, zIndex } = theme;

	return {
		root: ({ featured }) => ({
			padding: spacing(featured ? 8 : 4, 4),
			margin: spacing(2, featured ? -1 : 0),
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

export const Card: React.FC<CardData> = props => {
	const { title, price, properties, callToAction, featured } = props;
	const classes = useStyles({ featured });

	return (
		<Paper className={classes.root}>
			<Box
				alignItems="center"
				display="flex"
				flexDirection="column"
				justifyContent="center"
			>
				<Box fontWeight={700}>{title}</Box>
				<Box alignItems="center" display="flex">
					<Box className={classes.dollar} fontWeight={700}>
						$
					</Box>
					<Box className={classes.price} fontWeight={900}>
						{price.annually}
					</Box>
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
			</Box>
		</Paper>
	);
};
