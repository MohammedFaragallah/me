import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Icon, Typography } from 'Components';
import React from 'react';

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
			margin: [[spacing(-6), 0, 0, spacing(-5)]],
			top: -spacing(2),
			left: -spacing(2),
		},
	};
});

const Services = () => {
	const classes = useStyles();

	return (
		<Box
			id="services"
			minHeight="100vh"
			component="section"
			mb={10}
			display="flex"
			flexDirection="column"
			justifyContent="center"
			p={{ md: 6, xs: 3 }}
		>
			<Box
				mb={2}
				fontSize={10}
				fontWeight={500}
				letterSpacing={5}
				color="grey.A700"
			>
				ABOUT ME
			</Box>
			<Box
				color="grey.A700"
				fontSize={18}
				mb={4}
				fontWeight={700}
				letterSpacing={5}
				lineHeight={1.8}
			>
				WHO AM I?
			</Box>
			<Grid container spacing={4}>
				{services.map(({ color, icon, label, details }) => (
					<Grid key={color} item md={4}>
						<Box
							boxShadow="0px 0px 56px -8px rgba(0,0,0,0.17)"
							bgcolor="background.paper"
							style={{
								borderBottom: `2px solid ${color}`,
							}}
							p={2}
						>
							<Icon
								style={{ backgroundColor: color, color: 'white' }}
								size="large"
								className={classes.icon}
							>
								{icon}
							</Icon>
							<Typography bottomSpace="small">{label}</Typography>
							<Typography bottomSpace="small">{details}</Typography>
						</Box>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default Services;
