import { Box } from '@material-ui/core';
import React from 'react';

const Layout = props => {
	const { children } = props;

	return <Box bgcolor="common.white">{children}</Box>;
};

export default Layout;
