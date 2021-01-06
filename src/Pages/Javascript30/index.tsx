import React from 'react';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom';
import slugify from 'slugify';

import Clock from 'Pages/Javascript30/Clock';
import DrumKit from 'Pages/Javascript30/DrumKit';
import Javascript30Home from 'Pages/Javascript30/Home';
import Variables from 'Pages/Javascript30/Variables';

export interface Item {
	component: React.FC;
	name: string;
}

const items: Item[] = [
	{ component: Clock, name: 'Clock' },
	{ component: DrumKit, name: 'Drum Kit' },
	{ component: Variables, name: 'Variables' },
];

const Javascript30 = (props: RouteComponentProps) => {
	const { match } = props;

	return (
		<Switch>
			<Route
				component={(props: RouteComponentProps) => (
					<Javascript30Home items={items} {...props} />
				)}
				exact
				path={match.path}
			/>
			{items.map(({ component, name }) => (
				<Route
					component={component}
					key={name}
					path={`${match.path}/${slugify(name.toLowerCase())}`}
				/>
			))}
			<Redirect to="/notfound" />
		</Switch>
	);
};

export default Javascript30;
