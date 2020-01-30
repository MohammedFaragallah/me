import { Box, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Section, Typography } from 'Components';
import { plural } from 'pluralize';
import React from 'react';
import skills from 'skills.json';

const useStyles = makeStyles(theme => {
	return {
		logo: {
			transition: 'all .5s',
			'&:hover': {
				transform: `scale(1.3)`,
			},
		},
	};
});

const Skills = () => {
	const classes = useStyles();

	return (
		<Section id="skills">
			<Box
				mb={2}
				fontSize={10}
				fontWeight={500}
				letterSpacing={5}
				color="grey.A700"
			>
				Skills
			</Box>
			<Box
				color="grey.A700"
				fontSize={18}
				mb={4}
				fontWeight={700}
				letterSpacing={5}
				lineHeight={1.8}
			>
				Technologies I've worked with
			</Box>
			<Box display="flex" flexDirection="column">
				{Object.keys(skills).map(category => {
					return (
						<React.Fragment key={category}>
							<Typography blockquote weight={600}>
								{plural(category).toUpperCase()}
							</Typography>
							<Box display="flex" justifyContent="space-around" flexWrap="wrap">
								{skills[category].map(item => {
									return (
										<Link
											key={item.name}
											href={item.url}
											style={{ margin: 16, position: 'relative' }}
											target="_blank"
										>
											<img
												className={classes.logo}
												src={require(`../logos/${item.files[0]}`)}
												title={item.name}
												alt={item.name}
												width={80}
												height={80}
											/>
										</Link>
									);
								})}
							</Box>
						</React.Fragment>
					);
				})}
			</Box>
		</Section>
	);
};

export default Skills;

/* <Typography color="textSecondary">
	The Big Oxmox advised her not to do so, because there were thousands of
	bad Commas, wild Question Marks and devious Semikoli, but the Little
	Blind Text didn’t listen. She packed her seven versalia, put her initial
	into the belt and made herself on the way.
</Typography>
<Grid container>
	<Grid md={6} xs={12} item>
		<Slider
			marks={[
				{ value: 40, label: 'Good' },
				{ value: 60, label: 'very Good' },
				{ value: 80, label: 'Excellent' },
				{ value: 95, label: 'Perfect' },
			]}
			classes={classes}
			valueLabelDisplay="auto"
			aria-label="pretto slider"
			defaultValue={20}
		/>
	</Grid> */
