import { Box, Container, Grid } from '@material-ui/core';
import React from 'react';

import SectionHeading from 'Components/SectionHeading';
import ServiceCard from 'Components/ServiceCard';
import Times from 'Components/Times';

const Services = () => {
	return (
		<Box
			bgcolor="grey.200"
			component="section"
			id="services"
			mt="-10vh"
			py={25}
		>
			<Container>
				<SectionHeading label="Exciting tours for adventurous people" />
				<Grid container spacing={4}>
					<Times times={3}>
						<Grid item lg={4} md={6} xs={12}>
							<ServiceCard />
						</Grid>
					</Times>
				</Grid>
			</Container>
		</Box>
	);
};

export default Services;
