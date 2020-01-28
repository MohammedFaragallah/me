import { makeStyles } from '@material-ui/styles';
import profileImage from 'assets/images/profile.jpg';
import { Field, Formik } from 'formik';
import React, { useState } from 'react';

import { ColorPicker } from './ColorPicker';

const initial = { spacing: 1, blur: 10, base: '#000001' };

const LOCAL_STORAGE_KEY = 'variables';

const useStyles = makeStyles(theme => {
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
		JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || initial;

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
							<Field type="range" name="spacing" min="1" max="20" />

							<label htmlFor="blur">Blur:</label>
							<Field
								type="range"
								name="blur"
								min="0"
								max="25"
								data-sizing="px"
							/>

							<label htmlFor="base">Base Color</label>
							<Field component={ColorPicker} name="base" />

							<button type="submit" disabled={isSubmitting}>
								save
							</button>
						</form>
					);
				}}
			</Formik>
			<img className={classes.image} src={profileImage} alt="" />
		</>
	);
};

export default Variables;
