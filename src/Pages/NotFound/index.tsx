import { Typography } from '@material-ui/core';
import { CenteredMessage, Page } from 'Components';
import React from 'react';
import { useIntl } from 'react-intl';

const NotFound = () => {
	const intl = useIntl();
	const message = intl.formatMessage({
		id: 'label.notfound',
		defaultMessage: 'Not Found',
	});

	return (
		<Page titles={[message]}>
			<CenteredMessage>
				<Typography gutterBottom>{message}</Typography>
			</CenteredMessage>
		</Page>
	);
};

export default NotFound;
