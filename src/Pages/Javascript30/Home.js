import { Link } from '@material-ui/core';
import React from 'react';

const Home = () => {
	const base = '/javascript30';
	return (
		<>
			<Link href={`${base}/drum-kit`}>DrumKit</Link>
		</>
	);
};

export default Home;
