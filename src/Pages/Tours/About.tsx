import {
	Box,
	Container,
	Grid,
	Typography,
	makeStyles,
} from '@material-ui/core';
import clsx from 'clsx';
import color from 'color';
import HoverLink from 'Components/HoverLink';
import SectionHeading from 'Components/SectionHeading';
import Times from 'Components/Times';
import React from 'react';

const useStyles = makeStyles(theme => {
	const { spacing, palette } = theme;

	return {
		heading: {
			textTransform: 'uppercase',
			fontSize: 18,
			fontWeight: 700,
		},
		composition: {
			margin: spacing(8, 0),
			position: 'relative',
			'&:hover img:not(:hover)': {
				transform: 'scale(0.9)',
			},
		},
		image: {
			width: '55%',
			boxShadow: `0 ${spacing(3)}px ${spacing(6)}px ${color(
				palette.common.black,
			).alpha(0.1)}`,
			borderRadius: 2,
			position: 'absolute',
			zIndex: 10,
			outlineOffset: spacing(2),
			transition: 'all 0.2s',
			'&:hover': {
				transform: `scale(1.1) translateY(${spacing(2)}px)`,
				zIndex: 20,
				outline: `${spacing(2)}px solid ${palette.secondary.main}`,
			},
		},
		firstImage: {
			top: spacing(-2),
			left: 0,
		},
		secondImage: {
			top: spacing(2),
			right: 0,
		},
		thirdImage: {
			top: spacing(8),
			left: '20%',
		},
	};
});

const About = () => {
	const classes = useStyles();

	return (
		<Box id="about" component="section" bgcolor="grey.200" mt="-20vh" py={30}>
			<Container>
				<SectionHeading label="Exciting tours for adventurous people" />
				<Grid container spacing={2}>
					<Grid item md={6} sm={12}>
						<Times times={2}>
							<Typography className={classes.heading}>
								You're going to fall in love with nature
							</Typography>
							<Typography color="textSecondary">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Aperiam, ipsum sapiente aspernatur libero repellat quis
								consequatur ducimus quam nisi exercitationem omnis earum qui.
							</Typography>
						</Times>

						<HoverLink label="learn more &rarr;" />
					</Grid>
					<Grid className={classes.composition} item md={6} xs={12}>
						<img
							src={require('assets/images/nat-1-large.jpg')}
							alt="first 1"
							className={clsx(classes.image, classes.firstImage)}
						/>
						<img
							src={require('assets/images/nat-2-large.jpg')}
							alt="first 2"
							className={clsx(classes.image, classes.secondImage)}
						/>
						<img
							src={require('assets/images/nat-3-large.jpg')}
							alt="first 3"
							className={clsx(classes.image, classes.thirdImage)}
						/>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default About;
