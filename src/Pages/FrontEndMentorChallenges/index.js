import FrontEndMentorChallengesHome from 'Pages/FrontEndMentorChallenges/Home';
import PricingWithToggle from 'Pages/FrontEndMentorChallenges/PricingWithToggle';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import slugify from 'slugify';

const items = [{ component: PricingWithToggle, name: 'Pricing With Toggle' }];

const Challenges = props => {
	const { match } = props;

	return (
		<Switch>
			<Route
				path={match.path}
				component={props => (
					<FrontEndMentorChallengesHome items={items} {...props} />
				)}
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

export default Challenges;
