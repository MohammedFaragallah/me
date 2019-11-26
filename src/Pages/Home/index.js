import { Page } from 'Components';
import React from 'react';
import { useIntl } from 'react-intl';

const Resume = () => {
	const intl = useIntl();
	const message = intl.formatMessage({
		id: 'hello.message',
		defaultMessage: 'Hello',
	});

	return <Page>{message}</Page>;
};

export default Resume;
