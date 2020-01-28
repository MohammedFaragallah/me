import React from 'react';
import SketchPicker from 'react-color/lib/Sketch';

export const ColorPicker = props => {
	const {
		field: { value, name },
		form: { setFieldValue },
	} = props;

	const setValue = newValue => setFieldValue(name, newValue.hex);

	return (
		<SketchPicker
			color={value}
			onChange={setValue}
			onChangeComplete={setValue}
		/>
	);
};
