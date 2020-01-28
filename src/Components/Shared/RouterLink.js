import { Link as MuiLink } from '@material-ui/core';
import React from 'react';
import { Link as RLink } from 'react-router-dom';

export const RouterLink = React.forwardRef((props, ref) => {
	const { style, fullWidth, textColor, indicator, ...rest } = props;

	return <RLink innerRef={ref} {...rest} />;
});

export const Link = ({ children, ...props }) => (
	<MuiLink underline="none" component={RouterLink} color="inherit" {...props}>
		{children}
	</MuiLink>
);
