import {
	Box,
	Container,
	Paper,
	Typography,
	makeStyles,
} from '@material-ui/core';
import color from 'color';
import React from 'react';

import HoverLink from 'Components/HoverLink';
import SectionHeading from 'Components/SectionHeading';
import Times from 'Components/Times';

const useStyles = makeStyles(theme => {
	const { spacing, palette } = theme;

	return {
		card: {
			width: '75%',
			margin: `${spacing(4)}px auto`,
			boxShadow: `0 ${spacing(3)}px ${spacing(6)}px ${color(
				palette.common.black,
			).alpha(0.1)}`,
			padding: spacing(6),
			paddingLeft: spacing(9),
			fontSize: spacing(2),
			transform: 'skewX(-12deg)',
			'& > *': {
				transform: 'skewX(12deg)',
			},
			'&:hover': {
				'&> figure': {
					'&> figcaption': {
						opacity: 1,
						transform: 'translate(-50%, -50%)',
					},
					'&> img': {
						transform: `scale(1.1)`,
						filter: `blur(${spacing(0.5)}px) brightness(80%)`,
					},
				},
			},
		},
		avatar: {
			width: spacing(15),
			height: spacing(15),
			margin: spacing(0, 2, 0, 0),
			'& > img': {
				borderRadius: 100,
				transition: 'all .5s',
			},
		},
		caption: {
			position: 'absolute',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, 20%)',
			color: palette.common.white,
			textTransform: 'uppercase',
			fontSize: spacing(2),
			textAlign: 'center',
			opacity: 0,
			transition: 'all .5s',
		},
		heading: {
			marginBottom: spacing(2),
			fontSize: spacing(2),
			fontWeight: 700,
			textTransform: 'uppercase',
		},
		storiesLink: {
			margin: '0 auto',
		},
		bgVideo: {
			position: 'absolute',
			top: 0,
			left: 0,
			height: '100%',
			width: '100%',
			opacity: 0.15,
			overflow: 'hidden',
			zIndex: -1,
		},
		content: {
			height: '100%',
			width: '100%',
			objectFit: 'cover',
		},
	};
});

const Testimonials = () => {
	const classes = useStyles();

	return (
		<Box
			bgcolor="grey.200"
			component="section"
			id="testimonials"
			position="relative"
			py={10}
			zIndex={0}
		>
			<Box className={classes.bgVideo}>
				<video autoPlay className={classes.content} loop muted>
					<source src={require('assets/images/video.mp4')} type="video/mp4" />
					Your browser is not supported!
				</video>
			</Box>
			<Box component={Container} display="flex" flexDirection="column">
				<SectionHeading label="Exciting tours for adventurous people" />
				<Times times={2}>
					<Box
						className={classes.card}
						component={Paper}
						display="flex"
						flexDirection="row"
					>
						<Box className={classes.avatar} component="figure">
							<img
								alt="demo"
								height="100%"
								src={require('assets/images/keyboard.jpg')}
								width="100%"
							/>
							<Box className={classes.caption} component="figcaption">
								SHIRT
							</Box>
						</Box>
						<Box width="inherit">
							<Typography className={classes.heading}>
								GORGEOUS WOODEN CHIPS
							</Typography>
							<Typography>
								Small Berkshire Table programming Estonia Generic Soft Table
								aggregate parsing Communications Handcrafted Rubber Cameroon
								Streets Rand Loti monitor syndicate Forward functionalities
							</Typography>
						</Box>
					</Box>
				</Times>
				<HoverLink
					className={classes.storiesLink}
					label="Read all stories &rarr;"
				/>
			</Box>
		</Box>
	);
};

export default Testimonials;
