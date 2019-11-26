import { Box, Container, Typography } from '@material-ui/core';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { LocaleSelector } from 'Selectors';

// TODO: move bread crump here as a global option

const Page = props => {
	const { container, children, titles = [] } = props;

	const {
		locale: { code, dir },
	} = useSelector(LocaleSelector);

	return (
		<Container component="main" {...container}>
			<Helmet>
				<html lang={code} />
				<title>
					{/* TODO: allow passing title intl id to avoid importing react-intl allover */}
					{[...titles, process.env.REACT_APP_NAME].filter(Boolean).join(' | ')}
				</title>
				<body dir={dir} />
				{/* Open Graph / Facebook */}
				<meta property="og:type" content="website" />
			</Helmet>

			<Box mt={{ sm: 8 }}>
				<Box
					display="none"
					displayPrint="flex"
					flexDirection="column"
					alignItems="center"
				>
					<Typography weight={700}>{titles?.[0]}</Typography>
				</Box>
				{children}
			</Box>
		</Container>
	);
};

Page.defaultProps = {
	container: {},
	customDisplayPrint: false,
	loading: false,
	title: [],
};

export { Page };
