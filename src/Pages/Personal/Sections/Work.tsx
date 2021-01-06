import { Box, Grid } from '@material-ui/core';
import React from 'react';

import { Section } from 'Components';
import Project from 'Components/ProjectCard';

const Work = () => {
	return (
		<Section id="work">
			<Box
				color="grey.A700"
				fontSize={10}
				fontWeight={500}
				letterSpacing={5}
				mb={2}
			>
				My Work
			</Box>
			<Box
				color="grey.A700"
				fontSize={18}
				fontWeight={700}
				letterSpacing={5}
				lineHeight={1.8}
				mb={4}
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
