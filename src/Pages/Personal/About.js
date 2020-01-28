import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Image from 'assets/images/pens.jpg';
import { Icon, Typography } from 'Components';
import data from 'myData.json';
import React from 'react';
import { Parallax } from 'react-parallax';

import { Section } from './Section';

const useStyles = makeStyles(theme => {
	const { spacing } = theme;

	return {
		btnDownload: {
			textTransform: 'uppercase',
			padding: [[spacing(1), spacing(3)]],
			border: '1px solid #000',
			display: 'inline-block',
			marginTop: spacing(4),
		},
		icon: { marginBottom: spacing(2) },
	};
});

const About = () => {
	const classes = useStyles();

	return (
		<Section id="about">
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
				fontWeight={700}
				letterSpacing={5}
				lineHeight={1.8}
			>
				WHO AM I?
			</Box>
			<Box my={6}>
				{data.personalInformation.summary.map(sum => (
					<Typography key={sum} bottomSpace="small" color="textSecondary">
						{sum}
					</Typography>
				))}
				<Box my={4}>
					<Box
						color="grey.A700"
						fontSize={18}
						mb={4}
						fontWeight={700}
						letterSpacing={5}
						lineHeight={1.8}
					>
						I BUILD!
					</Box>
					<Grid container spacing={4}>
						{[
							{ color: '#a84cb8', icon: 'brush', label: 'User Interface' },
							{ color: '#4054b2', icon: 'web', label: 'Web Apps' },
							{ color: '#2c98f0', icon: 'storage', label: 'Database Design' },
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
						].map(({ color, icon, label }) => (
							<Grid key={label} item md={3}>
								<Box
									boxShadow="0px 0px 56px -8px rgba(0,0,0,0.17)"
									bgcolor="background.paper"
									style={{
										borderBottom: `2px solid ${color}`,
									}}
									p={2}
								>
									<Icon size="large" style={{ color }} className={classes.icon}>
										{icon}
									</Icon>
									<Typography bottomSpace="small">{label}</Typography>
								</Box>
							</Grid>
						))}
					</Grid>
				</Box>
			</Box>
			<Parallax blur={2} bgImage={Image} strength={1000}>
				<Box p={4} position="relative">
					<Box
						fontSize={18}
						fontWeight={300}
						fontFamily="Brothers"
						className={classes.btnDownload}
					>
						Hire me
					</Box>
				</Box>
			</Parallax>
		</Section>
	);
};

export default About;
