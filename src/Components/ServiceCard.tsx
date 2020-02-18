import {
	Box,
	Button,
	Dialog,
	Divider,
	Fade,
	Typography,
	makeStyles,
} from '@material-ui/core';
import color from 'color';
import React, { useState } from 'react';

import Times from './Times';

const useStyles = makeStyles(theme => {
	const { spacing, palette } = theme;

	return {
		cardRoot: {
			borderRadius: spacing(0.5),
			overflow: 'hidden',
			boxShadow: `0 ${spacing(3)}px ${spacing(6)}px ${color(
				palette.common.black,
			).alpha(0.1)}`,
			position: 'relative',
		},
		media: {
			backgroundImage: `linear-gradient(to right bottom,
				${color(palette.secondary.dark)}, 
				${color(palette.secondary.main)}),
				url(${require('assets/images/nat-5.jpg')})`,
			height: spacing(25),
			backgroundBlendMode: 'screen',
			backgroundSize: 'cover',
			clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
		},
		heading: {
			fontSize: spacing(3),
			fontWeight: 300,
			textTransform: 'uppercase',
			position: 'absolute',
			top: spacing(15),
			right: spacing(3),
			color: palette.common.white,
			textAlign: 'right',
			width: '65%',
		},
		span: {
			padding: spacing(1),
			backgroundImage: `linear-gradient(to right bottom,
				${color(palette.secondary.dark).alpha(0.4)},
				${color(palette.secondary.main).alpha(0.4)})`,
			boxDecorationBreak: 'clone',
		},
		list: {
			listStyle: 'none',
			width: '80%',
			margin: `${spacing(4)}px auto ${spacing(2)}px`,
			padding: 0,
		},
		listItem: {
			textAlign: 'center',
			fontSize: spacing(2),
			padding: spacing(1),
		},
		back: {
			position: 'absolute',
			height: '100%',
			width: '100%',
			top: 0,
			left: 0,
			backgroundImage: `linear-gradient(to right bottom,
				${color(palette.secondary.main).alpha(0.95)},
				${color(palette.secondary.dark).alpha(0.95)})`,
		},
		priceBox: {
			textAlign: 'center',
			color: palette.common.white,
			marginBottom: spacing(8),
		},
		priceOnly: {
			fontSize: spacing(2),
			textTransform: 'uppercase',
		},
		priceValue: {
			fontSize: spacing(6),
			fontWeight: 100,
		},
	};
});

const ProductCard = () => {
	const [showed, setShowed] = useState(false);
	const classes = useStyles();
	const [open, setOpen] = useState(false);

	return (
		<Box
			width="100%"
			height="100%"
			position="relative"
			onFocus={() => setShowed(true)}
			onMouseOver={() => setShowed(true)}
			onMouseLeave={() => setShowed(false)}
			className={classes.cardRoot}
		>
			<Box>
				<Box className={classes.media} />
				<Typography className={classes.heading}>
					<Box component="span" className={classes.span}>
						Heading Heading Heading
					</Box>
				</Typography>
				<ul className={classes.list}>
					<Times times={5}>
						<li className={classes.listItem}>item 1</li>
						<Divider />
					</Times>
				</ul>
			</Box>
			<Fade in={showed}>
				<Box
					className={classes.back}
					display="flex"
					flexDirection="column"
					justifyContent="center"
					alignItems="center"
				>
					<Box className={classes.priceBox}>
						<Typography className={classes.priceOnly}>Only</Typography>
						<Typography className={classes.priceValue}>$297</Typography>
					</Box>
					<Button
						variant="contained"
						color="primary"
						style={{ borderRadius: 50 }}
						onClick={() => setOpen(true)}
					>
						Disabled
					</Button>
				</Box>
			</Fade>
			<Dialog
				onClose={() => setOpen(false)}
				aria-labelledby="simple-dialog-title"
				open={open}
			>
				<p>project summary</p>
			</Dialog>
		</Box>
	);
};

export default ProductCard;
