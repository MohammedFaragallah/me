import { Box, Container, Grid, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Logo1X from 'assets/images/logo-green-small-1x.png';
import color from 'color';
import React from 'react';

import Times from './Times';

const useStyles = makeStyles(theme => {
	const { palette, spacing } = theme;
	return {
		root: {
			backgroundColor: palette.primary.main,
			padding: [[spacing(10), 0]],
			fontSize: spacing(1.4),
			color: palette.grey[300],
			marginTop: 'auto',
		},
		logoBox: {
			textAlign: 'center',
			marginBottom: spacing(6),
		},
		logo: {
			width: spacing(15),
			height: 'auto',
		},
		navigation: {
			borderTop: `1px solid ${palette.grey[300]}`,
			paddingTop: spacing(2),
			display: 'inline-block',
		},
		list: { listStyle: 'none' },
		listItem: {
			display: 'inline-block',
			marginRight: spacing(1.5),
		},
		link: {
			'&:link, &:visited': {
				color: palette.grey[50],
				backgroundColor: palette.grey.A200,
				textDecoration: 'none',
				textTransform: 'uppercase',
				display: 'inline-block',
				transition: 'all .2s',
			},
			'&:hover, &:active': {
				color: palette.secondary.main,
				boxShadow: `0 ${spacing(1)}px ${spacing(2)}px ${color(
					palette.common.black,
				).alpha(0.4)} `,
				transform: 'rotate(5deg) scale(1.3)',
			},
		},
		copyright: {
			borderTop: `1px solid ${palette.grey.A300}`,
			paddingTop: spacing(2),
			width: '80%',
		},
	};
});

const Footer = () => {
	const classes = useStyles();

	return (
		<Box className={classes.root} component="footer">
			<Container>
				<Box className={classes.logoBox}>
					<img className={classes.logo} alt="Full logo" src={Logo1X} />
				</Box>
				<Grid container spacing={2}>
					<Grid item lg={6}>
						<Box className={classes.navigation}>
							<ul className={classes.list}>
								<Times times={5}>
									<li className={classes.listItem}>
										<Link href="/" className={classes.link}>
											Company
										</Link>
									</li>
								</Times>
							</ul>
						</Box>
					</Grid>
					<Grid item lg={6}>
						<p className={classes.copyright}>
							Built by{' '}
							<Link href="/" className={classes.link}>
								Mohammed Faragallah
							</Link>{' '}
						</p>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Footer;
