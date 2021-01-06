import { Typography } from '@material-ui/core';
import React from 'react';
import { useIntl } from 'react-intl';

import { CenteredMessage, Page } from 'Components';

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
