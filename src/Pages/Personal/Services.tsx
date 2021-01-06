import { Box, Grid, Typography, makeStyles } from '@material-ui/core';
import React from 'react';

import { Icon } from 'Components';

const services = [
	{
		color: '#a84cb8',
		icon: 'brush',
		label: 'INNOVATIVE IDEAS',
		details:
			'Separated they live in Bookmarksgrove right at the coast of the Semantics',
	},
	{
		color: '#2c98f0',
		icon: 'storage',
		label: 'SOFTWARE',
		details:
			'Separated they live in Bookmarksgrove right at the coast of the Semantics',
	},
	{
		color: '#ec5453',
		icon: 'public',
		label: 'APPLICATION',
		details:
			'Separated they live in Bookmarksgrove right at the coast of the Semantics',
	},
	{
		color: '#f9bf3f',
		icon: 'android',
		label: 'Application',
		details:
			'Separated they live in Bookmarksgrove right at the coast of the Semantics',
	},
	{
		color: '#2fa499',
		icon: 'public',
		label: 'SOFTWARE',
		details:
			'Separated they live in Bookmarksgrove right at the coast of the Semantics',
	},
	{
		color: '#4054b2',
		icon: 'public',
		label: 'APPLICATION',
		details:
			'Separated they live in Bookmarksgrove right at the coast of the Semantics',
	},
];

const useStyles = makeStyles(theme => {
	const { spacing } = theme;

	return {
		icon: {
			borderRadius: 100,
			fontSize: spacing(10),
			margin: spacing(-6, 0, 0, -5),
			top: -spacing(2),
			left: -spacing(2),
		},
	};
});

const Services = () => {
	const classes = useStyles();

	return (
		<Box
			component="section"
			display="flex"
			flexDirection="column"
			id="services"
			justifyContent="center"
			mb={10}
			minHeight="100vh"
			p={{ md: 6, xs: 3 }}
		>
			<Box
				color="grey.A700"
				fontSize={10}
				fontWeight={500}
				letterSpacing={5}
				mb={2}
			>
				ABOUT ME
			</Box>
			<Box
				color="grey.A700"
				fontSize={18}
				fontWeight={700}
				letterSpacing={5}
				lineHeight={1.8}
				mb={4}
			>
				WHO AM I?
			</Box>
			<Grid container spacing={4}>
				{services.map(({ color, icon, label, details }) => (
					<Grid item key={color} md={4}>
						<Box
							bgcolor="background.paper"
							boxShadow="0px 0px 56px -8px rgba(0,0,0,0.17)"
							p={2}
							style={{
								borderBottom: `2px solid ${color}`,
							}}
						>
							<Icon
								className={classes.icon}
								size="large"
								style={{ backgroundColor: color, color: 'white' }}
							>
								{icon}
							</Icon>
							<Typography>{label}</Typography>
							<Typography>{details}</Typography>
						</Box>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default Services;
