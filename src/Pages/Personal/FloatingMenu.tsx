import { makeStyles } from '@material-ui/core';
import color from 'color';
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useSelector } from 'react-redux';
import Scrollspy from 'react-scrollspy';

import { StoreState } from 'Store';

const useStyles = makeStyles(theme => {
	const { palette, spacing } = theme;

	return {
		navLink: {
			padding: spacing(2),
			margin: spacing(0.5),
			'&:link,&:visited': {
				display: 'block',
				textDecoration: 'none',
				color: palette.common.black,
				padding: spacing(0.5),
				transition: 'all 0.2s',
			},
			fontWeight: 500,
			fontSize: 14,
			letterSpacing: 1.2,
			width: 20,
			height: 20,
			border: `1px solid ${palette.primary.main}`,
			borderRadius: 20,
			zIndex: 5000,
		},
		active: {
			backgroundColor: palette.primary.main,
			boxShadow: `0 ${spacing(3)}px ${spacing(6)}px ${color(
				palette.secondary.main,
			).alpha(0.1)}`,
		},
	};
});
interface Props {}

export const FloatingMenu: React.FC<Props> = () => {
	const classes = useStyles();
	const navLinks = [...useSelector((state: StoreState) => state.ui.menuLinks)];

	return (
		<Scrollspy
			componentTag="span"
			currentClassName={classes.active}
			items={navLinks.map(item => item.toLowerCase())}
			style={{
				position: 'fixed',
				bottom: 30,
				right: 30,
			}}
		>
			{navLinks.map(link => (
				<AnchorLink
					className={classes.navLink}
					href={`#${link.toLowerCase()}`}
					key={link}
				/>
			))}
		</Scrollspy>
	);
};
