import Clock from 'Pages/Javascript30/Clock';
import DrumKit from 'Pages/Javascript30/DrumKit';
import Home from 'Pages/Javascript30/Home';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import slugify from 'slugify';

const items = [
	{ component: DrumKit, name: 'Drum Kit' },
	{ component: Clock, name: 'Clock' },
];

const Exercises = props => {
	const { match } = props;

	return (
		<Switch>
			<Route
				path={match.path}
				component={props => <Home items={items} {...props} />}
				exact
			/>
			{items.map(({ component, name }) => (
				<Route
					key={name}
					path={`${match.path}/${slugify(name.toLowerCase())}`}
					component={component}
				/>
			))}
			<Redirect to="/notfound" />
		</Switch>
	);
};

export default Exercises;
