import DrumKit from 'Pages/Javascript30/DrumKit';
import Home from 'Pages/Javascript30/Home';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Exercises = props => {
	const { match } = props;

	return (
		<Switch>
			<Route path={match.path} component={Home} exact />
			<Route path={`${match.path}/drum-kit`} component={DrumKit} />
			<Redirect to="/notfound" />
		</Switch>
	);
};

export default Exercises;
