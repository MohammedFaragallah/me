import 'autotrack';

import * as Sentry from '@sentry/browser';
import { PRODUCTION } from 'Constants';
import ReactGA from 'react-ga';

if (process.env.NODE_ENV === PRODUCTION) {
	Sentry.init({
		dsn: 'https://cfba4aaf1e8245ab842258fabc136b93@sentry.io/1543148',
	});

	ReactGA.initialize(process.env.REACT_APP_ANALYTICS_API_KEY);

	ReactGA.ga('require', 'cleanUrlTracker');
	ReactGA.ga('require', 'eventTracker');
	ReactGA.ga('require', 'impressionTracker');
	ReactGA.ga('require', 'maxScrollTracker');
	ReactGA.ga('require', 'mediaQueryTracker');
	ReactGA.ga('require', 'outboundFormTracker');
	ReactGA.ga('require', 'outboundLinkTracker');
	ReactGA.ga('require', 'pageVisibilityTracker');
	ReactGA.ga('require', 'socialWidgetTracker');
	ReactGA.ga('require', 'urlChangeTracker');
}
