import { ErrorBoundary } from 'Components';
import FrontEndMentor from 'Pages/FrontEndMentorChallenges';
import Javascript30 from 'Pages/Javascript30';
import NotFound from 'Pages/NotFound';
import Personal from 'Pages/Personal';
import Resume from 'Pages/Resume';
import Tours from 'Pages/Tours';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Routes = props => (
	<ErrorBoundary>
		<Switch>
			<Route path="/" component={Personal} />
			<Route path="/tours" component={Tours} />
			<Route path="/javascript30" component={Javascript30} />
			<Route path="/FrontEndMentor" component={FrontEndMentor} />
			<Route path="/resume" component={Resume} />
			<Route path="/notfound" component={NotFound} />
			<Redirect to="/notfound" />
		</Switch>
	</ErrorBoundary>
);

export default Routes;
