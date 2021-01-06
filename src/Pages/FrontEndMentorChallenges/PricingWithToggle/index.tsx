import { Box, Typography, createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';

import { Card } from './Card';
import { baseTheme } from './Theme';
import { Toggle } from './Toggle';

export interface CardData {
	title: string;
	price: {
		annually: number;
		monthly: number;
	};
	properties: string[];
	callToAction: {
		label: string;
		to: string;
	};
	featured: boolean;
}

const cardsData: CardData[] = [
	{
		title: 'Basic',
		price: { annually: 199.99, monthly: 19.99 },
		properties: ['500 GB Storage', '2 Users Allowed', 'Send up to 3 GB'],
		callToAction: { label: 'Learn More', to: '/' },
		featured: false,
	},
	{
		title: 'Professional',
		price: { annually: 249.99, monthly: 24.99 },
		properties: ['1 TB Storage', '5 Users Allowed', 'Send up to 10 GB'],
		callToAction: { label: 'Learn More', to: '/' },
		featured: true,
	},
	{
		title: 'Master',
		price: { annually: 399.99, monthly: 39.99 },
		properties: ['2 TB Storage', '10 Users Allowed', 'Send up to 20 GB'],
		callToAction: { label: 'Learn More', to: '/' },
		featured: false,
	},
];

const PricingWithToggle = () => {
	const theme = createMuiTheme(baseTheme);

	return (
		<ThemeProvider theme={theme}>
			<Box alignItems="center" display="flex" flexDirection="column">
				<Typography>Our Pricing</Typography>
				<Toggle />
				<Box
					alignItems="center"
					display="flex"
					flexDirection="row"
					flexWrap="wrap"
					justifyContent="center"
					margin="0 auto"
					width="100%"
				>
					{cardsData.map(card => (
						<Card key={card.title} {...card} />
					))}
				</Box>
			</Box>
		</ThemeProvider>
	);
};

export default PricingWithToggle;
