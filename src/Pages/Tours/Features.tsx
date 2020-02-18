import {
	Box,
	Container,
	Grid,
	Slide,
	Typography,
	makeStyles,
} from '@material-ui/core';
import color from 'color';
import { Icon } from 'Components';
import Times from 'Components/Times';
import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';

const useStyles = makeStyles(theme => {
	const { palette, spacing } = theme;

	return {
		root: {
			padding: spacing(20, 0),
			backgroundImage: `linear-gradient(to right bottom,
				${color(palette.secondary.dark).alpha(0.8)},
				${color(palette.secondary.main).alpha(0.8)}),
				url(${require('assets/images/pens.jpg')})`,
			backgroundSize: 'cover',
			backgroundPosition: 'center',

			transform: 'skewY(-7deg )',
			'& > *': {
				transform: 'skewY(7deg )',
			},
		},
		cardRoot: {
			backgroundColor: `${color(palette.common.white).alpha(0.8)}`,
			borderRadius: spacing(0.5),
			boxShadow: `0 ${spacing(3)}px ${spacing(6)}px ${color(
				palette.common.black,
			).alpha(0.1)}`,
			fontSize: spacing(2),
			margin: spacing(2),
			padding: spacing(4, 2),
			textAlign: 'center',
			transition: 'all 0.3s',
			'&:hover': {
				transform: `translateY(${spacing(-1)}px) scale(1.03)`,
			},
		},
		icon: {
			backgroundImage: `linear-gradient(to right,
				${color(palette.secondary.dark)},
				${color(palette.secondary.main)})`,
			color: 'transparent',
			display: 'inline-block',
			fontSize: spacing(10),
			marginBottom: spacing(1),
			'-webkit-background-clip': 'text',
		},
	};
});

const Features = () => {
	const classes = useStyles();
	const [check, setCheck] = useState(false);
	return (
		<Waypoint onEnter={() => setCheck(true)}>
			<Box id="features" mt={-10} className={classes.root} component="section">
				<Grid component={Container} container>
					<Times times={4}>
						<Slide direction="up" in={check} timeout={2000}>
							<Grid item md={3}>
								<Box className={classes.cardRoot}>
									<Icon className={classes.icon}>fingerprint</Icon>
									<Typography>explore</Typography>
									<Typography>
										Lorem, ipsum dolor sit amet consectetur adipisicing elit.
										Maiores, fugit.
									</Typography>
								</Box>
							</Grid>
						</Slide>
					</Times>
				</Grid>
			</Box>
		</Waypoint>
	);
};

export default Features;
