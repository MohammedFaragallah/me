import { Container, Link } from '@material-ui/core';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';
import { FormattedMessage, injectIntl } from 'react-intl';

import { CenteredMessage } from 'Components';

class Boundary extends Component<any> {
	state = { error: null, info: null };

	static getDerivedStateFromError(error: any) {
		// Update state so the next render will show the fallback UI.
		return { hasError: true, error };
	}

	componentDidCatch(
		error: Error,
		info: {
			componentStack: string;
		},
	) {
		const { onError } = this.props;

		if (typeof onError === 'function') {
			try {
				/* istanbul ignore next: Ignoring ternary; can’t reproduce missing info in test environment. */
				onError.call(this, error, info ? info.componentStack : '');
			} catch (ignoredError) {}
		}

		this.setState({ error, info });
	}

	render() {
		const { error } = this.state;
		const { children } = this.props;
		const { REACT_APP_NAME } = process.env;

		if (error !== null) {
			return (
				<Container component="main">
					<Helmet>
						<title>
							{[
								this.props.intl.formatMessage({
									id: 'label.error',
									defaultMessage: 'Something went wrong',
								}),
								REACT_APP_NAME,
							].join(' | ')}
						</title>
					</Helmet>
					<CenteredMessage>
						<FormattedMessage
							defaultMessage="Something went wrong"
							id="label.error"
						/>
						<Link color="textPrimary" href="/" underline="none">
							<FormattedMessage defaultMessage="Go Home" id="label.go.home" />
						</Link>
					</CenteredMessage>
				</Container>
			);
		}

		return children || null;
	}
}

export const ErrorBoundary = injectIntl(Boundary);
