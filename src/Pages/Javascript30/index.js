import Clock from 'Pages/Javascript30/Clock';
import DrumKit from 'Pages/Javascript30/DrumKit';
import Javascript30Home from 'Pages/Javascript30/Home';
import Variables from 'Pages/Javascript30/Variables';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import slugify from 'slugify';

const items = [
	{ component: Clock, name: 'Clock' },
	{ component: DrumKit, name: 'Drum Kit' },
	{ component: Variables, name: 'Variables' },
];

const Javascript30 = props => {
	const { match } = props;

	return (
		<Switch>
			<Route
				path={match.path}
				component={props => <Javascript30Home items={items} {...props} />}
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

export default Javascript30;
