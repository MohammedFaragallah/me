import { TextField as MuiTextField } from '@material-ui/core';
import { getIn } from 'formik';
import React from 'react';

export const fieldToTextField = props => {
	const { field, form, variant = 'standard', disabled, ...rest } = props;
	const { name } = field;
	const { touched, errors, isSubmitting } = form;

	const fieldError = getIn(errors, name);
	const showError = getIn(touched, name) && !!fieldError;

	return {
		...rest,
		...field,
		variant,
		error: showError,
		helperText: showError ? fieldError : rest.helperText,
		disabled: disabled !== undefined ? disabled : isSubmitting,
	};
};

export const TextField = ({ children, ...rest }) => (
	<MuiTextField {...fieldToTextField(rest)}>{children}</MuiTextField>
);

TextField.displayName = 'FormikMaterialUITextField';
