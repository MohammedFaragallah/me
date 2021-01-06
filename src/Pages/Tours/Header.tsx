import { Box, Button, Slide, Typography, makeStyles } from '@material-ui/core';
import color from 'color';
import React from 'react';

import { Link } from 'Components';
import { barHeight } from 'Constants';
import Data from 'myData.json';

const useStyles = makeStyles(theme => {
	const { palette, spacing } = theme;

	return {
		root: {
			backgroundImage: `linear-gradient(to right bottom,
			${color(palette.secondary.dark).alpha(0.8)},
			${color(palette.secondary.main).alpha(0.8)}),
			url(${require('assets/images/keyboard.jpg')})`,
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			clipPath: 'polygon(0 0, 100% 0, 100% 75vh, 0 100%)',
			marginTop: -barHeight,
		},
		logo: {
			margin: spacing(4),
			height: 35,
		},
		textBox: {
			textAlign: 'center',
		},
		headingPrimary: {
			color: palette.common.white,
			marginBottom: spacing(8),
		},
		headingMain: {
			display: 'block',
			fontSize: 60,
			fontWeight: 400,
			letterSpacing: 10,
			textTransform: 'uppercase',
		},
		headingSub: {
			display: 'block',
			fontSize: 18,
			fontWeight: 400,
		},
		callToAction: {
			display: 'inline-block',
			textTransform: 'uppercase',
			padding: spacing(2, 4),
			borderRadius: 50,
		},
		navLink: {
			padding: spacing(2),
			'&:link,&:visited': {
				display: 'inline-block',
				textDecoration: 'none',
				color: palette.common.white,
				borderBottom: `1px solid ${palette.common.white}`,
				padding: spacing(0.5),
				transition: 'all 0.2s',
			},
			'&:hover': {
				backgroundColor: palette.secondary.main,
				boxShadow: `0 ${spacing(3)}px ${spacing(6)}px ${color(
					palette.secondary.main,
				).alpha(0.1)}`,
				transform: 'translateY(-2px)',
			},
			'&:active': {
				boxShadow: `0 ${spacing(3)}px ${spacing(6)}px ${color(
					palette.primary.main,
				).alpha(0.1)}`,
				transform: 'translateY(0)',
			},

			fontWeight: 500,
			fontSize: 14,
			letterSpacing: 1.2,
		},
	};
});

const Header = () => {
	const classes = useStyles();

	return (
		<Box className={classes.root} component="header" height="95vh">
			<Box
				alignItems="center"
				className={classes.textBox}
				display="flex"
				flexDirection="column"
				height="100%"
				justifyContent="center"
			>
				<Typography className={classes.headingPrimary}>
					<Slide direction="right" in timeout={1000}>
						<span className={classes.headingMain}>mohammed faragallah</span>
					</Slide>
					{/* <Slide direction="left" in timeout={1000}>
						<span className={classes.headingSub}>
							/(Full-stack|(Back|Front)-End) Web developer/i
						</span>
					</Slide> */}
					<Slide direction="left" in timeout={1000}>
						<span className={classes.headingSub}>
							{Data.personalInformation.introduction}
						</span>
					</Slide>
				</Typography>
				<Slide direction="up" in timeout={1000}>
					<Button className={classes.callToAction} variant="contained">
						<Link to="/resume">Resume</Link>
					</Button>
				</Slide>
			</Box>
		</Box>
	);
};

export default Header;
