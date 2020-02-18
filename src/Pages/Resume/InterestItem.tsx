import { Box, ListItem } from '@material-ui/core';
import { Icon } from 'Components';
import React from 'react';

interface Props {
	label: string;
}

export const InterestItem = (props: Props) => {
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
