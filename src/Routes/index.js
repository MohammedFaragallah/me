import { ErrorBoundary } from 'Components';
import Layout from 'Layout';
import Home from 'Pages/Home';
import NotFound from 'Pages/NotFound';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Routes = props => (
	<Layout>
		<ErrorBoundary>
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/notfound" component={NotFound} />
				<Redirect to="/notfound" />
			</Switch>
		</ErrorBoundary>
	</Layout>
);

export default Routes;
