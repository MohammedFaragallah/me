import React from 'react';
import { SketchPicker } from 'react-color';

export const ColorPicker = (props: any) => {
	const {
		field: { value, name },
		form: { setFieldValue },
	} = props;

	const setValue = (newValue: any) => setFieldValue(name, newValue.hex);

	return (
		<SketchPicker
			color={value}
			onChange={setValue}
			onChangeComplete={setValue}
		/>
	);
};
