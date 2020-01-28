import { Box } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { registerMenuItem } from 'Store';

export const Section = props => {
	const { children, id } = props;
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(registerMenuItem(id));
	}, [dispatch, id]);

	return (
		<Box
			id={id}
			minHeight="100vh"
			component="section"
			mb={10}
			display="flex"
			flexDirection="column"
			justifyContent="center"
			p={{ md: 6, xs: 3 }}
			{...props}
		>
			{children}
		</Box>
	);
};

export default Section;

// export const Section = props => {
// 	const { children, id } = props;
// 	return (
// 		<Waypoint onEnter={() => console.log(id)}>
// 			<Box {...props}>{children}</Box>
// 		</Waypoint>
// 	);
// };
