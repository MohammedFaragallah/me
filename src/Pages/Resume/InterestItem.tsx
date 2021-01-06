import { Box, ListItem } from '@material-ui/core';
import React from 'react';

import { Icon } from 'Components';

interface Props {
	label: string;
}

export const InterestItem = (props: Props) => {
	const { label } = props;

	return (
		<ListItem button disableGutters>
			<Icon>arrow_right</Icon>
			<Box fontFamily="Brothers" fontSize={18}>
				{label}
			</Box>
		</ListItem>
	);
};
