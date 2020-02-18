import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => {
	const { spacing } = theme;

	return {
		sound: {
			color: '#ffc600',
		},
		key: {
			display: 'flex',
			flexDirection: 'column',
			border: '.4rem solid black',
			borderRadius: '.5rem',
			margin: spacing(1),
			padding: spacing(1),
			transition: 'all .07s ease',
			textAlign: 'center',
			color: 'white',
			background: 'rgba(0,0,0,0.4)',
			textShadow: '0 0 .5rem black',
			width: '100%',
		},
	};
});
