import { Box, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useSelector } from 'react-redux';
import Scrollspy from 'react-scrollspy';
import { StoreState } from 'Store';
import color from 'color';

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
	};
});

interface Props {}

export const Menu: React.FC<Props> = () => {
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
