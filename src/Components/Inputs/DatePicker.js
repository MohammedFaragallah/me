import DateFnsUtils from '@date-io/date-fns';
import {
	DatePicker as RawDatePicker,
	MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import PropTypes from 'prop-types';
import React from 'react';

const DatePicker = props => {
	const {
		label,
		field,
		locale,
		dispatch,
		form: { touched, errors, values, setFieldValue },
		...other
	} = props;
	const errorText = errors[field.name];
	const hasError = touched[field.name] && errorText !== undefined;
	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<RawDatePicker
				label={label}
				error={hasError}
				helperText={hasError ? errorText : ''}
				onChange={value => setFieldValue(field.name, value)}
				value={values[field.name]}
				{...other}
			/>
		</MuiPickersUtilsProvider>
	);
};

DatePicker.propTypes = {
	label: PropTypes.string.isRequired,
	field: PropTypes.shape({
		name: PropTypes.string,
	}).isRequired,
	form: PropTypes.shape({
		dirty: PropTypes.bool,
		errors: PropTypes.object,
	}).isRequired,
	fullWidth: PropTypes.bool,
	margin: PropTypes.oneOf(['none', 'dense', 'normal']),
	ampm: PropTypes.bool,
	autoOk: PropTypes.bool,
};

DatePicker.defaultProps = {
	fullWidth: true,
	margin: 'normal',
	ampm: false,
	autoOk: true,
};

export { DatePicker };
