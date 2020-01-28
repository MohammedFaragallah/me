import { Box, ListItem } from '@material-ui/core';
import { Icon } from 'Components';
import React from 'react';

export const InterestItem = props => {
	const { label } = props;

	return (
		<ListItem button disableGutters>
			<Icon>arrow_right</Icon>
			<Box fontSize={18} fontFamily="Brothers">
				{label}
			</Box>
		</ListItem>
	);
};
