import { Box, Grid } from '@material-ui/core';
import { Section } from 'Components';
import Project from 'Components/ProjectCard';
import React from 'react';

const Work = () => {
	return (
		<Section id="work">
			<Box
				mb={2}
				fontSize={10}
				fontWeight={500}
				letterSpacing={5}
				color="grey.A700"
			>
				My Work
			</Box>
			<Box
				color="grey.A700"
				fontSize={18}
				mb={4}
				fontWeight={700}
				letterSpacing={5}
				lineHeight={1.8}
			>
				Some Projects I managed to cleanup for presentation
			</Box>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Project cover={require('assets/images/devart.png')} />
				</Grid>
			</Grid>
		</Section>
	);
};

export default Work;
