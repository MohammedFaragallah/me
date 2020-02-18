import { Box, Typography, makeStyles } from '@material-ui/core';
import { Section } from 'Components';
import { plural } from 'pluralize';
import React from 'react';
import skills from 'skills.json';

const useStyles = makeStyles(theme => {
	const { spacing } = theme;

	return {
		logo: {
			transition: 'all .5s',
			'&:hover': {
				transform: `scale(1.3)`,
			},
		},
		headerQoute: {
			fontWeight: 600,
			backgroundColor: 'rgba(255,229,100,0.3)',
			borderLeftColor: '#ffe564',
			borderLeftWidth: 9,
			borderLeftStyle: 'solid',
			padding: spacing(2.5, 5, 2.5, 3),
			margin: spacing(2.5, -3, 3),
		},
	};
});

interface Item {
	name: string;
	shortname: string;
	url: string;
	files: string[];
	type: string;
}

type Category = 'framework' | 'service' | 'tool' | 'language' | 'database';

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
							<Typography className={classes.headerQoute}>
								{plural(category).toUpperCase()}
							</Typography>
							<Box display="flex" justifyContent="space-around" flexWrap="wrap">
								{/* {skills[category].map((item: Item) => {
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
								})} */}
							</Box>
						</React.Fragment>
					);
				})}
			</Box>
		</Section>
	);
};

export default Skills;
