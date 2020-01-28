import React from 'react';
import { Link } from 'react-router-dom';
import slugify from 'slugify';

const Home = props => {
	const { items } = props;

	return (
		<>
			{items.map(({ name }) => (
				<Link key={name} to={`/FrontEndMentorChallenges/${slugify(name)}`}>
					{name}
				</Link>
			))}
		</>
	);
};

export default Home;
