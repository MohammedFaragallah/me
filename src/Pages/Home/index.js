import { Page } from 'Components';
import React from 'react';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';

const Home = () => {
	const intl = useIntl();
	const message = intl.formatMessage({
		id: 'hello.message',
		defaultMessage: 'Hello',
	});

	return (
		<Page>
			<Link to="/javascript30">Javascript 30 {message}</Link>
		</Page>
	);
};

export default Home;
