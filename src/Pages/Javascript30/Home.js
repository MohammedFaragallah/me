import React from 'react';
import { Link } from 'react-router-dom';
import slugify from 'slugify';

const Home = props => {
	const { items } = props;
	const base = '/javascript30';
	return (
		<>
			{items.map(({ name }) => (
				<Link key={name} to={`${base}/${slugify(name)}`}>
					{name}
				</Link>
			))}
		</>
	);
};

export default Home;
