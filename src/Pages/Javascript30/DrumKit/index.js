import { Box } from '@material-ui/core';
import React from 'react';

import Player from './Player';

const sounds = [
	{ key: 'a', name: 'clap' },
	{ key: 's', name: 'hihat' },
	{ key: 'd', name: 'kick' },
	{ key: 'f', name: 'openhat' },
	{ key: 'g', name: 'boom' },
	{ key: 'h', name: 'ride' },
	{ key: 'j', name: 'snare' },
	{ key: 'k', name: 'tom' },
	{ key: 'l', name: 'tink' },
];

const DrumKit = () => {
	return (
		<Box
			display="flex"
			justifyContent="space-around"
			alignItems="center"
			height="80vh"
		>
			{sounds.map(sound => (
				<Player key={sound.key} sound={sound} />
			))}
		</Box>
	);
};

export default DrumKit;
