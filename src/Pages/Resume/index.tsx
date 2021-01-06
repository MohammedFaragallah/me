import {
	Box,
	Container,
	Divider,
	Grid,
	Typography,
	makeStyles,
} from '@material-ui/core';
import React from 'react';

import { Page } from 'Components';

import { IconItem } from './IconItem';
import call from './Icons/Call_cw.png';
import domain from './Icons/Domain_cq.png';
import email from './Icons/Email_ct.png';
import facebook from './Icons/FB.png';
import place from './Icons/Place_cn.png';
import twitter from './Icons/Twitter_s.png';
import linkedin from './Icons/linkedin.png';
import { InterestItem } from './InterestItem';
import { PersonalItem } from './PersonalItem';
import { ProfileItem } from './ProfileItem';
import { SideBlock } from './SideBlock';

const connects = [
	{ icon: twitter, alt: 'twitter', text: '@ffragalla' },
	{ icon: facebook, alt: 'facebook', text: '/mohammedAliFaragallah' },
	{ icon: linkedin, alt: 'linkedin', text: '/mohammed-faragallah' },
];

const contacts = [
	{ icon: call, alt: 'call', text: '+201229823464' },
	{ icon: email, alt: 'email', text: 'ffragalla@gmail.com' },
	{
		icon: domain,
		alt: 'domain',
		text: 'github.com/mohammedFaragallah',
	},
	{ icon: place, alt: 'place', text: 'Alexandria - Egypt' },
];

const personal = [
	{ title: 'Birthday', text: '25th July 1991' },
	{ title: 'Nationality', text: 'Egyptian' },
	{ title: 'Languages', text: 'Arabic, English' },
	{ title: 'Relationship', text: 'Single' },
	{ title: 'Military service', text: 'Good example' },
];

const profile = [
	{ title: 'Communications', value: 70 },
	{ title: 'Creativity', value: 80 },
	{ title: 'Goal-oriented', value: 90 },
	{ title: 'Teamwork', value: 80 },
	{ title: 'leadership', value: 70 },
	{ title: 'Fast-learner', value: 80 },
];

// detail-orientation
// logical thinking
// good organizational skills
// the ability to work well on a team
// passion for learning

const interests = [
	{ label: 'Pattern drawing' },
	{ label: 'Photography' },
	{ label: 'Machine learning' },
	{ label: 'Music' },
];

const useStyles = makeStyles(theme => {
	const { palette } = theme;

	return {
		leftSide: {
			backgroundColor: 'rgba(209,211,212,1)',
			borderRight: `1px solid rgba(112,112,112,1)`,
		},
		rightSide: {
			backgroundColor: palette.common.white,
		},
	};
});

const Resume = () => {
	const classes = useStyles();

	return (
		<Page>
			<Container>
				<Grid container>
					<Grid
						className={classes.leftSide}
						component={Box}
						display="flex"
						flexDirection="column"
						height="100%"
						item
						md={4}
						p={2}
					>
						<SideBlock data={contacts} item={IconItem} label="Contact" />
						<SideBlock data={personal} item={PersonalItem} label="Personal" />
						<SideBlock data={profile} item={ProfileItem} label="Profile" />
						<SideBlock data={interests} item={InterestItem} label="Interests" />
						<SideBlock
							data={connects}
							item={IconItem}
							label="Connect"
							style={{ marginTop: 'auto' }}
						/>
					</Grid>
					<Grid
						className={classes.rightSide}
						component={Box}
						display="flex"
						flexDirection="column"
						height="auto"
						item
						md={8}
						p={2}
					>
						<Typography>M O H A M M E D F A R A G A L L A H</Typography>
						<Typography>F U L L S T A C K W E B D E V E L O P E R</Typography>
						<Typography>Available for Freelancing/Full-time job</Typography>
						<Divider />
					</Grid>
				</Grid>
			</Container>
		</Page>
	);
};

export default Resume;
