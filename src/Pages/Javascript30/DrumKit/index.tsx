import { Box } from '@material-ui/core';
import React from 'react';

import Player from './Player';

export interface Sound {
	key: string;
	name: string;
}

const sounds: Sound[] = [
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
			alignItems="center"
			display="flex"
			height="80vh"
			justifyContent="space-around"
		>
			{sounds.map(sound => (
				<Player key={sound.key} sound={sound} />
			))}
		</Box>
	);
};

export default DrumKit;
