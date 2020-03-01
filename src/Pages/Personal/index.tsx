import {
	Box,
	Container,
	Grid,
	Hidden,
	makeStyles,
	SwipeableDrawer,
} from '@material-ui/core';
import { Icon, Page } from 'Components';
import { DEVELOPMENT } from 'Constants';
import { Menu } from 'Pages/Personal/Menu';
import About from 'Pages/Personal/Sections/About';
import Home from 'Pages/Personal/Sections/Home';
import Skills from 'Pages/Personal/Sections/Skills';
import Work from 'Pages/Personal/Sections/Work';
import React, { useState } from 'react';
import { FloatingMenu } from './FloatingMenu';

const useStyles = makeStyles(theme => {
	const { spacing } = theme;

	return {
		rightSide: {},
		menu: {
			position: 'fixed',
			top: spacing(2),
			left: spacing(2),
		},
	};
});

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
					<FloatingMenu />
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
