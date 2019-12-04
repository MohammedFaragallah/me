import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

const useStyles = makeStyles({
	clock: {
		width: '30rem',
		height: '30rem',
		border: '20px solid white',
		borderRadius: '50%',
		margin: '50px auto',
		position: 'relative',
		padding: '2rem',
		boxShadow:
			'0 0 0 4px rgba(0,0,0,0.1),inset 0 0 0 3px #EFEFEF,inset 0 0 10px black,0 0 10px rgba(0,0,0,0.2)',
	},
	clockFace: {
		position: 'relative',
		width: '100%',
		height: '100%',
		transform: 'translateY(-3px)',
	},
	hand: {
		width: '50%',
		height: '6px',
		background: 'black',
		position: 'absolute',
		top: '50%',
		transformOrigin: '100%',
		transform: 'rotate(90deg)',
		transition: 'all 0.05s',
		transitionTimingFunction: 'cubic-bezier(0.1, 2.7, 0.58, 1)',
	},
	secondHand: ({ now }) => ({
		transform: `rotate(${(now.getSeconds() / 60) * 360 + 90}deg)`,
	}),
	minutesHand: ({ now }) => ({
		transform: `rotate(${(now.getMinutes() / 60) * 360 +
			(now.getSeconds() / 60) * 6 +
			90}deg)`,
	}),
	hoursHand: ({ now }) => ({
		transform: `rotate(${(now.getHours() / 12) * 360 +
			(now.getMinutes() / 60) * 6 +
			90}deg)`,
	}),
});

const Clock = () => {
	const [now, setTime] = useState(new Date());
	const classes = useStyles({ now });

	useEffect(() => {
		setInterval(() => {
			setTime(new Date());
		}, 1000);
	}, []);

	return (
		<Box className={classes.clock}>
			<Box className={classes.clockFace}>
				<Box className={clsx(classes.hand, classes.secondHand)} />
				<Box className={clsx(classes.hand, classes.minutesHand)} />
				<Box className={clsx(classes.hand, classes.hoursHand)} />
			</Box>
		</Box>
	);
};

export default Clock;
