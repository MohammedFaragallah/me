import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CV from 'assets/CV.pdf';
import HomeBG from 'assets/images/pens.jpg';
import clsx from 'clsx';
import { Icon, Link, Typography } from 'Components';
import data from 'myData.json';
import React from 'react';

import { Section } from './Section';

const useStyles = makeStyles(theme => {
	const { spacing } = theme;

	return {
		homeSection: {
			background: `url(${HomeBG}) center/cover no-repeat`,
		},
		btnDownload: {
			textTransform: 'uppercase',
			padding: [[spacing(1), spacing(3)]],
			border: '1px solid #000',
			display: 'inline-block',
			marginTop: spacing(4),
		},
		downloadIcon: { marginLeft: spacing(1), padding: spacing(1) },
	};
});

const Home = () => {
	const classes = useStyles();

	return (
		<Section
			id="home"
			minHeight="100vh"
			component="section"
			mb={10}
			className={classes.homeSection}
			display="flex"
			flexDirection="column"
			justifyContent="center"
			p={{ md: 6, xs: 3 }}
		>
			<Typography>Hi, my name is</Typography>
			<Typography weight={600} size="large">
				{data.personalInformation.name}
			</Typography>
			<Typography>{data.personalInformation.introduction}</Typography>
			<Box display="flex">
				<Typography className={classes.btnDownload}>Resume</Typography>
				<Box
					component={Link}
					to={CV}
					target="_self"
					download
					className={clsx(classes.btnDownload, classes.downloadIcon)}
				>
					<Icon>cloud_download</Icon>
				</Box>
			</Box>
		</Section>
	);
};

export default Home;
