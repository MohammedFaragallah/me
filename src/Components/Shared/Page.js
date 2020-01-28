import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { LocaleSelector } from 'Selectors';

// TODO: move bread crump here as a global option

const Page = props => {
	const { children, titles = [], ...rest } = props;
	const {
		locale: { code, dir },
	} = useSelector(LocaleSelector);

	return (
		<main {...rest}>
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

			{children}
		</main>
	);
};

Page.defaultProps = {
	title: [],
};

export { Page };
