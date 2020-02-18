import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import clsx from 'clsx';
import color from 'color';
import React from 'react';

const useStyles = makeStyles(theme => {
	const { breakpoints, spacing, palette } = theme;

	return {
		button: {
			backgroundImage: `linear-gradient(147deg, ${palette.secondary.dark} 0%, ${palette.secondary.light} 74%)`,
			boxShadow: `0px 4px 32px ${color(palette.secondary.main).alpha(0.4)}`,
			borderRadius: 100,
			paddingLeft: 24,
			paddingRight: 24,
			color: '#ffffff',
		},
		root: {
			margin: spacing(4),
			paddingLeft: spacing(4),
			borderRadius: spacing(2), // 16px
			transition: '0.3s',
			boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
			position: 'relative',
			marginLeft: 'auto',
			overflow: 'initial',
			background: '#ffffff',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			paddingBottom: spacing(2),
			[breakpoints.up('md')]: {
				flexDirection: 'row',
				paddingTop: spacing(2),
			},
		},
		media: {
			width: '88%',
			marginLeft: 'auto',
			marginRight: 'auto',
			marginTop: spacing(-3),
			height: 0,
			paddingBottom: '48%',
			borderRadius: spacing(2),
			backgroundColor: '#fff',
			position: 'relative',
			[breakpoints.up('md')]: {
				width: '100%',
				marginLeft: spacing(-3),
				marginTop: 0,
				transform: 'translateX(-8px)',
			},
			'&:after': {
				content: '" "',
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				borderRadius: spacing(2), // 16
				opacity: 0.5,
			},
		},
		content: {
			padding: 24,
		},
		cta: {
			marginTop: 24,
			textTransform: 'initial',
		},
		shadowRoot: {
			boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
			transition: '0.3s',
			'&:hover': {
				boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
			},
		},
	};
});

interface Props {
	cover: string;
}

const ProjectCard = (props: Props) => {
	const { cover } = props;
	const { button: buttonStyles, ...styles } = useStyles();

	return (
		<Card className={clsx(styles.root, styles.shadowRoot)}>
			<CardMedia className={styles.media} image={cover} />
			<CardContent>
				<Button className={buttonStyles}>Read more</Button>
			</CardContent>
		</Card>
	);
};

export default ProjectCard;
