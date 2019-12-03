import { useStyles } from 'Pages/Javascript30/DrumKit/Styles';
import React from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import { useAudio } from 'Utils';

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
