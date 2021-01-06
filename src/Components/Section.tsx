import { Box, BoxProps } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { registerMenuItem } from 'Store';

interface Props extends BoxProps {
	id: string;
}

export const Section: React.FC<Props> = props => {
	const { children, id, ...rest } = props;
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(registerMenuItem(id));
	}, [dispatch, id]);

	return (
		<Box
			component="section"
			display="flex"
			flexDirection="column"
			id={id}
			justifyContent="center"
			mb={10}
			minHeight="100vh"
			p={{ md: 6, xs: 3 }}
			{...rest}
		>
			{children}
		</Box>
	);
};

export default Section;
