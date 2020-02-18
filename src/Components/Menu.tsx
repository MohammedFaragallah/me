import { Box, Fab, Link, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import color from 'color';
import { Icon } from 'Components';
import React, { useState } from 'react';

const useStyles = makeStyles(theme => {
	const { spacing, palette, zIndex } = theme;

	return {
		button: {
			height: spacing(7),
			width: spacing(7),
			position: 'fixed',
			top: spacing(6),
			right: spacing(6),
			borderRadius: '50%',
			zIndex: zIndex.tooltip,
			boxShadow: `0 ${spacing(1)}px ${spacing(3)}px ${color(
				palette.common.black,
			).alpha(0.1)}`,
			textAlign: 'center',
			cursor: 'pointer',
		},
		background: {
			height: spacing(6),
			width: spacing(6),
			borderRadius: '50%',
			position: 'fixed',
			top: spacing(6.5),
			right: spacing(6.5),
			zIndex: zIndex.mobileStepper,
			backgroundImage: `radial-gradient(${palette.secondary.light}, ${palette.secondary.dark})`,
			transition: 'transform .8s cubic-bezier(0.86, 0, 0.07, 1)',
		},
		scaleBG: {
			transform: 'scale(80)',
		},
		nav: {
			height: '100vh',
			position: 'fixed',
			top: 0,
			left: 0,
			zIndex: zIndex.snackbar,
			opacity: 0,
			width: 0,
			transition: 'all .8s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
		},
		showNav: {
			opacity: 1,
			width: '100%',
		},
		list: {
			position: 'absolute',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%,-50%)',
			listStyle: 'none',
			textAlign: 'center',
			width: '100%',
		},
		item: {
			margin: 'spacing(1)',
		},
		link: {
			'&:link, :visited': {
				display: 'inline-block',
				fontSize: spacing(3),
				fontWeight: 300,
				padding: spacing(1, 2),
				color: palette.common.white,
				textDecoration: 'none',
				textTransform: 'uppercase',
				backgroundImage: `linear-gradient(120deg, transparent 0%, transparent 50%, ${palette.common.white} 50%)`,
				backgroundSize: '220%',
				transition: 'all .4s',
			},
			'&:hover, :active': {
				backgroundPosition: '100%',
				color: palette.secondary.main,
				transform: `translateX(${spacing(1)})`,
			},
		},
	};
});

const Menu = () => {
	const classes = useStyles();
	const [checked, setChecked] = useState(false);

	return (
		<Box position="relative">
			<Fab
				color="secondary"
				aria-label="add"
				className={classes.button}
				onClick={() => setChecked(!checked)}
			>
				<Icon>{checked ? 'close' : 'menu'}</Icon>
			</Fab>
			{/* <input type="checkbox" className={classes.checkbox} id="navi-toggle" />

			<label htmlFor="navi-toggle" className={classes.button}>
				<Icon>{checked ? 'menu' : 'close'}</Icon>
			</label>
*/}
			<Box className={clsx(classes.background, checked && classes.scaleBG)}>
				&nbsp;
			</Box>

			<Box
				component="nav"
				className={clsx(classes.nav, checked && classes.showNav)}
			>
				<ul className={classes.list}>
					<li className={classes.item}>
						<Link href="/" className={classes.link}>
							About Natous
						</Link>
					</li>
					<li className={classes.item}>
						<Link href="/" className={classes.link}>
							Your benfits
						</Link>
					</li>
					<li className={classes.item}>
						<Link href="/" className={classes.link}>
							Popular tours
						</Link>
					</li>
					<li className={classes.item}>
						<Link href="/" className={classes.link}>
							Stories
						</Link>
					</li>
					<li className={classes.item}>
						<Link href="/" className={classes.link}>
							Book now
						</Link>
					</li>
				</ul>
			</Box>
		</Box>
	);
};

export default Menu;
