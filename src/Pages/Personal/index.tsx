import {
	Box,
	Container,
	Grid,
	Hidden,
	SwipeableDrawer,
	makeStyles,
} from '@material-ui/core';
import color from 'color';
import { Icon, Page } from 'Components';
import { DEVELOPMENT } from 'Constants';
import About from 'Pages/Personal/Sections/About';
import Home from 'Pages/Personal/Sections/Home';
import Skills from 'Pages/Personal/Sections/Skills';
import Work from 'Pages/Personal/Sections/Work';
import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useSelector } from 'react-redux';
import Scrollspy from 'react-scrollspy';
import { StoreState } from 'Store';

const useStyles = makeStyles(theme => {
	const { palette, spacing } = theme;

	return {
		avatar: {
			background: `url('${require('assets/images/avatar.jpg')}') center/cover no-repeat`,
			width: 150,
			height: 150,
			borderRadius: 100,
			margin: `0 auto ${spacing(3)}px`,
		},
		rightSide: {},
		navLink: {
			padding: spacing(2),
			'&:link,&:visited': {
				display: 'block',
				textDecoration: 'none',
				color: palette.common.black,
				borderBottom: `1px solid ${palette.common.white}`,
				padding: spacing(0.5),
				transition: 'all 0.2s',
			},
			'&:hover': {
				backgroundColor: palette.secondary.main,
				boxShadow: `0 ${spacing(3)}px ${spacing(6)}px ${color(
					palette.secondary.main,
				).alpha(0.1)}`,
				transform: 'translateY(-2px)',
			},
			'&:active': {
				boxShadow: `0 ${spacing(3)}px ${spacing(6)}px ${color(
					palette.primary.main,
				).alpha(0.1)}`,
				transform: 'translateY(0)',
			},
			fontWeight: 500,
			fontSize: 14,
			letterSpacing: 1.2,
		},
		active: {
			backgroundColor: palette.secondary.main,
			boxShadow: `0 ${spacing(3)}px ${spacing(6)}px ${color(
				palette.secondary.main,
			).alpha(0.1)}`,
			transform: 'translateY(-2px)',
		},
		menu: {
			position: 'fixed',
			top: spacing(2),
			left: spacing(2),
		},
	};
});

const Menu = () => {
	const classes = useStyles();
	const navLinks = [...useSelector((state: StoreState) => state.ui.menuLinks)];

	return (
		<Grid
			bgcolor="#f2f3f7"
			component={Box}
			display="flex"
			flexDirection="column"
			height="100vh"
			item
			md={3}
			p={2}
			position="sticky"
			top={0}
		>
			<Box pt={4}>
				<Box className={classes.avatar} />
				<Box textAlign="center" fontWeight={700}>
					Mohammed Faragallah
				</Box>
				<Box textAlign="center">Software Engineer</Box>
			</Box>
			<Box textAlign="center">
				<Scrollspy
					componentTag="span"
					items={navLinks.map(item => item.toLowerCase())}
					currentClassName={classes.active}
				>
					{navLinks.map(link => (
						<AnchorLink
							key={link}
							className={classes.navLink}
							href={`#${link.toLowerCase()}`}
						>
							{link.toUpperCase()}
						</AnchorLink>
					))}
				</Scrollspy>
			</Box>
		</Grid>
	);
};

const Personal = () => {
	const classes = useStyles();
	const [openedMenu, setMenuOpened] = useState(false);
	const { NODE_ENV } = process.env;

	return (
		<Page>
			<Grid component={Container} style={{ padding: 0 }} container>
				<Hidden mdUp>
					<Icon className={classes.menu} onClick={() => setMenuOpened(true)}>
						menu
					</Icon>
					<SwipeableDrawer
						disableBackdropTransition
						onClose={() => setMenuOpened(false)}
						onOpen={() => setMenuOpened(true)}
						open={openedMenu}
					>
						<Menu />
					</SwipeableDrawer>
				</Hidden>
				<Hidden smDown>
					<Menu />
				</Hidden>
				<Grid
					bgcolor="grey[50]"
					className={classes.rightSide}
					component={Box}
					display="flex"
					flexDirection="column"
					height="auto"
					item
					md={9}
				>
					<Home />
					<About />
					<Skills />
					{NODE_ENV === DEVELOPMENT && <Work />}
				</Grid>
			</Grid>
		</Page>
	);
};

export default Personal;
