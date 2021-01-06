import React from 'react';
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from 'react-router-dom';

import { ErrorBoundary } from 'Components';
import { Layout } from 'Layout';
import FrontEndMentor from 'Pages/FrontEndMentorChallenges';
import Javascript30 from 'Pages/Javascript30';
import NotFound from 'Pages/NotFound';
import Personal from 'Pages/Personal';
import Resume from 'Pages/Resume';
import Tours from 'Pages/Tours';

const Routes = () => (
	<Router>
		<Layout>
			<ErrorBoundary>
				<Switch>
					<Route component={Personal} path="/" />
					<Route component={Tours} path="/tours" />
					<Route component={Javascript30} path="/javascript30" />
					<Route component={FrontEndMentor} path="/FrontEndMentor" />
					<Route component={Resume} path="/resume" />
					<Route component={NotFound} path="/notfound" />
					<Redirect to="/notfound" />
				</Switch>
			</ErrorBoundary>
		</Layout>
	</Router>
);

export default Routes;
