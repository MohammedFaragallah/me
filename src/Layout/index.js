import { Box, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles(theme => ({
	root: {
		// backgroundImage:
		// 	"url('https://images.unsplash.com/photo-1574738886583-a7f27c04a094?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80')",
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		width: '100vw',
		height: '100vh',
		overflow: 'hidden',
	},
}));

const Layout = props => {
	const { children } = props;
	const classes = useStyles();

	return (
		<Box overflow="hidden" className={classes.root}>
			<Container>
				<Box>nav</Box>
				{children}
				<Box>footer</Box>
			</Container>
		</Box>
	);
};

export default Layout;
