import { Container, Grid, Hidden } from '@material-ui/core';
import { Page } from 'Components';
import About from 'Pages/Tours/About';
import ContactUs from 'Pages/Tours/ContactUs';
import Features from 'Pages/Tours/Features';
import Header from 'Pages/Tours/Header';
import Layout from 'Pages/Tours/Layout';
import Services from 'Pages/Tours/Services';
import Testimonials from 'Pages/Tours/Testimonials';
import React from 'react';

const Home = () => {
	return (
		<Layout>
			<Page>
				<Header />
				<Container>
					<Grid container spacing={2}>
						<Hidden smDown>
							<Grid item lg={4}>
								picture
							</Grid>
						</Hidden>
						<Grid item lg={8} sm={12}>
							about
						</Grid>
					</Grid>
				</Container>
				<About />
				<Features />
				<Services />
				<Testimonials />
				<ContactUs />
			</Page>
		</Layout>
	);
};

export default Home;
