import React from 'react';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom';
import slugify from 'slugify';

import FrontEndMentorChallengesHome from 'Pages/FrontEndMentorChallenges/Home';
import PricingWithToggle from 'Pages/FrontEndMentorChallenges/PricingWithToggle';

export interface Item {
	component: React.FC;
	name: string;
}

const items: Item[] = [
	{ component: PricingWithToggle, name: 'Pricing With Toggle' },
];

const Challenges = (props: RouteComponentProps) => {
	const { match } = props;

	return (
		<Switch>
			<Route
				component={(props: RouteComponentProps) => (
					<FrontEndMentorChallengesHome items={items} {...props} />
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

export default Challenges;
