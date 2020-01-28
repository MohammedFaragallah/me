import { Box, Grid } from '@material-ui/core';
// import { makeStyles } from '@material-ui/styles';
import React from 'react';

import Project from './Project';

// const useStyles = makeStyles(theme => {
// 	return {};
// });

const Work = () => {
	// const classes = useStyles();

	return (
		<Box
			id="work"
			minHeight="100vh"
			component="section"
			mb={10}
			display="flex"
			flexDirection="column"
			justifyContent="center"
			pt={10}
			p={{ md: 6, xs: 3 }}
		>
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
					<Project cover={require('./devart.png')} />
				</Grid>
			</Grid>
		</Box>
	);
};

export default Work;
