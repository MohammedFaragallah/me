import { Container, ContainerProps } from '@material-ui/core';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';

import { LocaleSelector } from 'Selectors';

// TODO: move bread crump here as a global option

interface Props extends ContainerProps {
	titles?: string[];
}

export const Page = (props: Props) => {
	const { children, titles = [], ...rest } = props;
	const { REACT_APP_NAME } = process.env;

	const {
		locale: { code, dir },
	} = useSelector(LocaleSelector);

	return (
		<Container component="main" {...rest}>
			<Helmet>
				<html lang={code} />
				<title>{[...titles, REACT_APP_NAME].join(' | ')}</title>
				<body dir={dir} />
				<meta content="website" property="og:type" />
			</Helmet>
			{children}
		</Container>
	);
};

Page.defaultProps = {
	title: [],
};
