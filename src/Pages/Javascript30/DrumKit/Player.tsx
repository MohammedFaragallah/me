import React, { useEffect, useState } from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';

import { useStyles } from 'Pages/Javascript30/DrumKit/Styles';

import { Sound } from './index';

const useAudio = (url: string): [boolean, () => void] => {
	const [audio] = useState(new Audio(url));
	const [playing, setPlaying] = useState(false);

	const toggle: () => void = () => {
		audio.currentTime = 0;
		setPlaying(!playing);
	};

	useEffect(() => {
		if (playing) audio.play();
		else audio.pause();
	}, [audio, playing]);

	useEffect(() => {
		audio.addEventListener('ended', () => setPlaying(false));
		return () => {
			audio.removeEventListener('ended', () => setPlaying(false));
		};
	}, [audio]);

	return [playing, toggle];
};

const getUrl = (name: string): string => require(`./sounds/${name}.mp3`);

interface Props {
	sound: Sound;
}

const Player = (props: Props) => {
	const {
		sound: { name, key },
	} = props;

	const [playing, toggle] = useAudio(getUrl(name));
	const classes = useStyles({ playing });

	return (
		// eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
		<div className={classes.key} onClick={toggle}>
			<span>{key.toUpperCase()}</span>
			<span className={classes.sound}>{name.toUpperCase()}</span>
			<KeyboardEventHandler handleKeys={[key]} onKeyEvent={toggle} />
		</div>
	);
};

export default Player;
