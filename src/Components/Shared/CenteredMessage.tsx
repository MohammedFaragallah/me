import { Box, BoxProps } from '@material-ui/core';
import React from 'react';

const CenteredMessage = ({
	children,
	height = '100%',
	width = '100%',
}: BoxProps) => (
	<Box
		alignContent="center"
		alignItems="center"
		display="flex"
		flexDirection="column"
		height={height}
		justifyContent="center"
		justifyItems="center"
		minHeight="30vh"
		overflow="hidden"
		width={width}
	>
		{children}
	</Box>
);

export { CenteredMessage };
