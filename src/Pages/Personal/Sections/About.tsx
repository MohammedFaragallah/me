import { Box, Grid, Typography, makeStyles } from '@material-ui/core';
import color from 'color';
import React from 'react';
import { Parallax } from 'react-parallax';

import { Icon, Section } from 'Components';
import data from 'myData.json';

const useStyles = makeStyles(theme => {
	const { spacing, palette } = theme;

	return {
		btnDownload: {
			textTransform: 'uppercase',
			padding: spacing(1, 3),
			border: '1px solid #000',
			display: 'inline-block',
			marginTop: spacing(4),
		},
		icon: { marginBottom: spacing(2) },
		parent: {
			//? source https://multiple.js.org
			width: '100%',
			height: '100%',
			backgroundPosition: 'center',
			backgroundAttachment: 'fixed',
			backgroundRepeat: 'no-repeat',
			backgroundImage: `linear-gradient(to right bottom,
				${color(palette.primary.dark)},
				${color(palette.primary.main)}),
				url(${require('assets/images/nat-5.jpg')})`,
			backgroundSize: 'cover',
			backgroundBlendMode: 'screen',
		},
	};
});

const About = () => {
	const classes = useStyles();

	return (
		<Section id="about">
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
			>
				WHO AM I?
			</Box>
			<Box my={6}>
				{data.personalInformation.summary.map(sum => (
					<Typography color="textSecondary" key={sum}>
						{sum}
					</Typography>
				))}
				<Box my={4}>
					<Box
						color="grey.A700"
						fontSize={18}
						fontWeight={700}
						letterSpacing={5}
						lineHeight={1.8}
						mb={4}
					>
						I BUILD!
					</Box>
					<Grid container spacing={4}>
						{[
							{ color: '#a84cb8', icon: 'brush', label: 'User Interfaces' },
							{ color: '#4054b2', icon: 'web', label: 'Web Apps' },
							{ color: '#2c98f0', icon: 'storage', label: 'Database Designs' },
							{
								color: '#ec5453',
								icon: 'desktop_windows',
								label: 'Desktop Apps',
							},
							{
								color: '#f9bf3f',
								icon: 'android',
								label: 'Cross-platform Mobile Apps',
							},
							{
								color: '#' + ((Math.random() * 0xffffff) << 0).toString(16),
								icon: 'pie_chart',
								label: 'Data Visualizations',
							},
						].map(({ color, icon, label }) => (
							<Grid item key={label} md={3}>
								<Box
									boxShadow="0px 0px 56px -8px rgba(0,0,0,0.17)"
									className={classes.parent}
									p={2}
									style={{
										color: 'white',
										borderBottom: `2px solid ${color}`,
									}}
								>
									<Icon className={classes.icon} size="large" style={{ color }}>
										{icon}
									</Icon>
									<Typography>{label}</Typography>
								</Box>
							</Grid>
						))}
					</Grid>
				</Box>
			</Box>
			<Parallax
				bgImage={require('assets/images/pens.jpg')}
				blur={2}
				strength={1000}
			>
				<Box p={4} position="relative">
					<Box
						className={classes.btnDownload}
						fontFamily="Brothers"
						fontSize={18}
						fontWeight={300}
					>
						Hire me
					</Box>
				</Box>
			</Parallax>
		</Section>
	);
};

export default About;
