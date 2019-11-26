import { Container, Link } from '@material-ui/core';
import { CenteredMessage } from 'Components';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';
import { FormattedMessage, injectIntl } from 'react-intl';

class ErrorBoundary extends Component {
	state = { error: null, info: null };

	static getDerivedStateFromError(error) {
		// Update state so the next render will show the fallback UI.
		return { hasError: true, error };
	}

	componentDidCatch(error, info) {
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
								process.env.REACT_APP_NAME,
							].join(' | ')}
						</title>
					</Helmet>
					<CenteredMessage>
						<FormattedMessage
							id="label.error"
							defaultMessage="Something went wrong"
						/>
						<Link underline="none" color="textPrimary" href="/">
							<FormattedMessage id="label.go.home" defaultMessage="Go Home" />
						</Link>
					</CenteredMessage>
				</Container>
			);
		}

		return children || null;
	}
}

ErrorBoundary = injectIntl(ErrorBoundary);

export { ErrorBoundary };
