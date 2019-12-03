import { Link } from '@material-ui/core';
import { Page } from 'Components';
import React from 'react';
import { useIntl } from 'react-intl';

const Home = () => {
	const intl = useIntl();
	const message = intl.formatMessage({
		id: 'hello.message',
		defaultMessage: 'Hello',
	});

	return (
		<Page>
			<Link href="/javascript30">Javascript 30 {message}</Link>
		</Page>
	);
};

export default Home;
