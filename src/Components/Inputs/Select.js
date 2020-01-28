import { Select as MuiSelect } from '@material-ui/core';
import React from 'react';

export const fieldToSelect = ({
	field,
	form: { isSubmitting, setFieldValue },
	disabled,
	...props
}) => ({
	disabled: disabled !== undefined ? disabled : isSubmitting,
	...props,
	...field,
	// onChange,
});

export const Select = props => <MuiSelect {...fieldToSelect(props)} />;

Select.displayName = 'FormikMaterialUISelect';
