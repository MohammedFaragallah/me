import { Box, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CV from 'assets/CV.pdf';
import clsx from 'clsx';
import { Icon, Section, Typography } from 'Components';
import data from 'myData.json';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LocaleSelector } from 'Selectors';
import { changeLanguage } from 'Store';

const useStyles = makeStyles(theme => {
	const { spacing } = theme;

	return {
		homeSection: {
			background: `url(${require('assets/images/pens.jpg')}) center/cover no-repeat`,
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
	const locale = useSelector(LocaleSelector);
	const dispatch = useDispatch();

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
					href={CV}
					target="_self"
					download
					className={clsx(classes.btnDownload, classes.downloadIcon)}
				>
					<Icon>cloud_download</Icon>
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
