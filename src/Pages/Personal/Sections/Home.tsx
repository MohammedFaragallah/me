import { Box, Link, Typography, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Icon, Section } from 'Components';
import { LocaleSelector } from 'Selectors';
import { changeLanguage } from 'Store';
import data from 'myData.json';

const useStyles = makeStyles(theme => {
	const { spacing } = theme;

	return {
		homeSection: {
			background: `url(${require('assets/images/pens.jpg')}) center/cover no-repeat`,
		},
		btnDownload: {
			textTransform: 'uppercase',
			padding: spacing(1, 3),
			border: '1px solid #000',
			display: 'inline-block',
			marginTop: spacing(4),
		},
		downloadIcon: { marginLeft: spacing(1), padding: spacing(1) },
	};
});

const Home = () => {
	const classes = useStyles();
	const locale = useSelector(LocaleSelector);
	const dispatch = useDispatch();

	return (
		<Section
			className={classes.homeSection}
			component="section"
			display="flex"
			flexDirection="column"
			id="home"
			justifyContent="center"
			mb={10}
			minHeight="100vh"
			p={{ md: 6, xs: 3 }}
		>
			<Typography>Hi, my name is</Typography>
			<Box fontWeight={600}>{data.personalInformation.name}</Box>
			<Typography>{data.personalInformation.introduction}</Typography>
			<Box display="flex">
				<Typography className={classes.btnDownload}>Resume</Typography>
				<Box className={clsx(classes.btnDownload, classes.downloadIcon)}>
					<Link download href={require('assets/CV.pdf')} target="_self">
						<Icon>cloud_download</Icon>
					</Link>
				</Box>
				<Box className={clsx(classes.btnDownload, classes.downloadIcon)}>
					<Icon
						onClick={() =>
							dispatch(
								changeLanguage(locale.locale.code === 'en' ? 'ar' : 'en'),
							)
						}
					>
						storage
					</Icon>
				</Box>
			</Box>
		</Section>
	);
};

export default Home;
