import { Box, makeStyles } from '@material-ui/core';
import color from 'color';
import { Field, Form, Formik } from 'formik';
import React from 'react';

// import { Button } from 'Components';

// import { object, string } from 'yup';

// const CommentSchema = object().shape({
// 	comment: string()
// 		.ensure()
// 		.trim()
// 		.min(2, 'Too Short!')
// 		.required('Required'),
// });

const useStyles = makeStyles(theme => {
	const { palette, spacing } = theme;

	return {
		root: {
			backgroundImage: `linear-gradient(to right bottom,
				${color(palette.secondary.dark).alpha(0.8)},
				${color(palette.secondary.main).alpha(0.8)})`,
		},
		container: {
			backgroundImage: `linear-gradient(105deg,
			${color(palette.common.white).alpha(0.9)} 0%,
			${color(palette.common.white).alpha(0.9)} 50%,
			transparent 50%
			),
			url(${require('assets/images/nat-10.jpg')})`,
			backgroundSize: 'cover',
			borderRadius: spacing(0.5),
			boxShadow: `0 ${spacing(2)}px ${spacing(4)}px ${color(
				palette.common.black,
			).alpha(0.15)}`,
		},
		form: {
			width: '50%',
			padding: spacing(6),
			marginBottom: spacing(2),
		},
		input: {
			fontSize: spacing(2),
			padding: spacing(1.5, 2),
			borderRadius: 2,
			backgroundColor: String(color(palette.common.white).alpha(0.5)),
			border: 'none',
			borderBottom: '3px solid transparent',
			width: '90%',
			transition: 'all 0.3s',
			'&:focus': {
				outline: 'none',
				boxShadow: `0 ${spacing(1)}px ${spacing(2)}px ${color(
					palette.common.black,
				).alpha(0.1)}`,
				borderBottom: `3px solid ${color(palette.secondary.main).alpha(0.5)}`,
			},
			'&:focus:invalid': {
				borderBottom: `3px solid ${color(palette.secondary.main)}`,
			},
			'&::-webkit-input-placeholder': {
				color: palette.grey.A200,
			},
			'&:placeholder-shown + label': {
				opacity: 0,
				visibility: 'hidden',
				transform: 'translateY(-4rem)',
			},
		},
		label: {
			fontSize: spacing(1.2),
			fontWeight: 700,
			marginLeft: spacing(2),
			marginTop: spacing(1),
			display: 'block',
			transition: 'all .3s',
		},
		radioInput: {
			display: 'none',
			'&:checked + label > div > span::after': {
				opacity: 1,
			},
		},
		radio: {
			marginRight: spacing(1),
			height: spacing(3),
			width: spacing(3),
			border: `${spacing(0.5)}px solid ${palette.secondary.main}`,
			borderRadius: '50%',
			display: 'inline-block',
			'&::after': {
				content: '""',
				display: 'block',
				height: spacing(1.3),
				width: spacing(1.3),
				borderRadius: '50%',
				transform: 'translate(30%, 30%)',
				backgroundColor: palette.secondary.main,
				opacity: 0,
				transition: 'opacity .2s',
			},
		},
		radioLabel: {
			fontSize: spacing(1.6),
			cursor: 'pointer',
			paddingLeft: spacing(4),
		},
	};
});

const ContactUs = () => {
	const classes = useStyles();

	return (
		<Box
			id="contact"
			component="section"
			bgcolor="grey.200"
			mt="-20vh"
			pt={30}
			pb={5}
			px={15}
			className={classes.root}
		>
			<Box className={classes.container}>
				<Formik
					// validationSchema={CommentSchema}
					initialValues={{ comment: '' }}
					onSubmit={async ({ comment }, { setSubmitting, resetForm }) => {
						try {
							//? Do something
							setSubmitting(false);
							resetForm({ values: { comment: '' } });
						} catch (error) {
							//? Handle something
							setSubmitting(false);
						}
					}}
				>
					{({ isSubmitting, isValid, dirty }) => (
						<Form className={classes.form}>
							<Box pb={2}>
								<Field
									className={classes.input}
									component="input"
									type="text"
									id="firstName"
									name="firstName"
									placeholder="First Name"
								/>
								<label htmlFor="firstName" className={classes.label}>
									First Name
								</label>
							</Box>
							<Box pb={2}>
								<Field
									className={classes.input}
									component="input"
									type="email"
									id="email"
									name="email"
									placeholder="Email"
								/>
								<label htmlFor="email" className={classes.label}>
									Email
								</label>
							</Box>
							<Box display="flex" pb={2}>
								{['small', 'large'].map(item => (
									<React.Fragment key={item}>
										<Field
											className={classes.radioInput}
											component="input"
											type="radio"
											id={item}
											name="size"
											placeholder={item}
										/>
										<label className={classes.radioLabel} htmlFor={item}>
											<Box display="flex" alignItems="center">
												<span className={classes.radio} />
												{item}
											</Box>
										</label>
									</React.Fragment>
								))}
							</Box>
							// TODO: button to typescript
							{/* <Button
								aria-label="add comment"
								color="secondary"
								loading={isSubmitting}
								disabled={!isValid && !dirty}
								type="submit"
								variant="contained"
							>
								Add Comment
							</Button> */}
						</Form>
					)}
				</Formik>
			</Box>
		</Box>
	);
};

export default ContactUs;
