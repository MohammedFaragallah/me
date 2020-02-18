import { Box, BoxProps } from '@material-ui/core';
import React from 'react';

const CenteredMessage = ({
	children,
	height = '100%',
	width = '100%',
}: BoxProps) => (
	<Box
		display="flex"
		flexDirection="column"
		alignContent="center"
		alignItems="center"
		justifyContent="center"
		justifyItems="center"
		height={height}
		width={width}
		minHeight="30vh"
		overflow="hidden"
	>
		{children}
	</Box>
);

export { CenteredMessage };
