import { useStyles } from 'Pages/Javascript30/DrumKit/Styles';
import React, { useEffect, useState } from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';

const useAudio = url => {
	const [audio] = useState(new Audio(url));
	const [playing, setPlaying] = useState(false);

	const toggle = () => {
		audio.currentTime = 0;
		setPlaying(!playing);
	};

	useEffect(() => {
		playing ? audio.play() : audio.pause();
	}, [audio, playing]);

	useEffect(() => {
		audio.addEventListener('ended', () => setPlaying(false));
		return () => {
			audio.removeEventListener('ended', () => setPlaying(false));
		};
	}, [audio]);

	return [playing, toggle];
};

const getUrl = name => require(`./sounds/${name}.mp3`);
const Player = props => {
	const {
		sound: { name, key },
	} = props;

	const [playing, toggle] = useAudio(getUrl(name));
	const classes = useStyles({ playing });

	return (
		<div onClick={toggle} className={classes.key}>
			<span>{key.toUpperCase()}</span>
			<span className={classes.sound}>{name.toUpperCase()}</span>
			<KeyboardEventHandler handleKeys={[key]} onKeyEvent={toggle} />
		</div>
	);
};

export default Player;
