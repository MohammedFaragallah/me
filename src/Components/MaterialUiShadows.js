import {
	Card,
	CardContent,
	Grid,
	Typography,
	useTheme,
} from '@material-ui/core';
import React from 'react';

const detectColors = text => {
	//? source https://github.com/egonyans/vscode-ext-color-highlight
	const colorFunctions = /((rgb|hsl)a?\([\d]{1,3}%?,\s*[\d]{1,3}%?,\s*[\d]{1,3}%?(,\s*\d?\.?\d+)?\))/gi;
	let match = colorFunctions.exec(text);
	let result = [];
	while (match !== null) {
		const start = match.index;
		const end = colorFunctions.lastIndex;
		const color = match[0];

		result.push({ start, end, color });

		match = colorFunctions.exec(text);
	}
	return result;
};

const MaterialUiShadows = () => {
	const { shadows } = useTheme();

	return (
		<Grid container spacing={2}>
			{shadows.map(shadow => {
				let begin = 0;
				let newText = [];
				const colors = detectColors(shadow);

				colors.length
					? colors.forEach(({ start, end, color }) => {
							newText.push(shadow.substring(begin, start));
							newText.push(
								<Typography
									key={color}
									component="span"
									style={{ backgroundColor: color }}
								>
									{color}
								</Typography>,
							);
							begin = end;
					  })
					: newText.push(shadow);

				return (
					<Grid key={shadow} item md={6}>
						<Card style={{ boxShadow: shadow, height: '100%' }}>
							<CardContent>{newText}</CardContent>
						</Card>
					</Grid>
				);
			})}
		</Grid>
	);
};

export default MaterialUiShadows;
