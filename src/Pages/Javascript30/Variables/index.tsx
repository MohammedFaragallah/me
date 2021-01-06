import { Theme, makeStyles } from '@material-ui/core';
import { Field, Formik } from 'formik';
import React, { useState } from 'react';

import { ColorPicker } from './ColorPicker';

interface StyleProps {
	spacing: number;
	blur: number;
	base: string;
}

const initial: StyleProps = { spacing: 1, blur: 10, base: '#000001' };

const LOCAL_STORAGE_KEY = 'variables';

const useStyles = makeStyles<Theme, StyleProps>(theme => {
	return {
		image: {
			padding: ({ spacing }) => theme.spacing(spacing),
			filter: ({ blur }) => `blur(${blur}px)`,
			background: ({ base }) => base,
		},
	};
});

const Variables = () => {
	const formData =
		JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '') || initial;

	const [values, setValues] = useState(formData);
	const classes = useStyles(values);

	return (
		<>
			<h2>
				Update CSS Variables with <span>JS</span>
			</h2>
			<Formik
				initialValues={formData}
				onSubmit={(values, { setSubmitting }) => {
					localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(values));
					setSubmitting(false);
				}}
			>
				{({
					values,
					handleSubmit,
					isSubmitting,
					handleChange,
					setFieldValue,
				}) => {
					setValues(values);

					return (
						<form onSubmit={handleSubmit}>
							<label htmlFor="spacing">Spacing:</label>
							<Field max="20" min="1" name="spacing" type="range" />

							<label htmlFor="blur">Blur:</label>
							<Field
								data-sizing="px"
								max="25"
								min="0"
								name="blur"
								type="range"
							/>

							<label htmlFor="base">Base Color</label>
							<Field component={ColorPicker} name="base" />

							<button disabled={isSubmitting} type="submit">
								save
							</button>
						</form>
					);
				}}
			</Formik>
			<img
				alt=""
				className={classes.image}
				src={require('assets/images/profile.jpg')}
			/>
		</>
	);
};

export default Variables;
