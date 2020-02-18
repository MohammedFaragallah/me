import {
	Icon as MuiIcon,
	IconProps as MuiIconProps,
	PropTypes,
	makeStyles,
} from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';

enum BGColor {
	default = 'default',
	primary = 'primary',
	secondary = 'secondary',
	danger = 'danger',
	white = 'white',
}

// enum Color {
// 	inherit = 'inherit',
// 	primary = 'primary',
// 	secondary = 'secondary',
// 	action = 'action',
// 	error = 'error',
// 	disabled = 'disabled',
// }

export interface IconProps extends MuiIconProps {
	className?: string;
	fontAwesomeProps?: object;
	icon?: string;
	inverted?: boolean;
	link?: boolean;
	size?: 'small' | '' | 'big' | 'large';
	color?: PropTypes.Color;
	bgColor?: BGColor;
	shape?: '' | 'square' | 'circular' | 'round';
	push?: '' | 'left' | 'right';
}

const colors = [
	'inherit',
	'primary',
	'secondary',
	'action',
	'error',
	'disabled',
];

const injectColor = (color: IconProps['color']): IconProps['color'] =>
	color && colors.includes(color) ? color : undefined;

const useStyles = makeStyles(theme => {
	const { palette, transitions, spacing } = theme;

	const invertedColor = palette.common.white;
	return {
		root: {
			// STANDALONE
			verticalAlign: 'sub',
			'&.-push-left': {
				marginLeft: spacing(1),
			},
			'&.-push-right': {
				marginRight: spacing(1),
			},
			'&.-link': {
				cursor: 'pointer',
				'&:not([class*="-color"])': {
					color: palette.text.primary,
				},
				transition: transitions.create('all', { duration: 500 }),
				'&:hover': {
					transform: 'scale(1.2)',
				},
			},
			// colors
			'&.-color-success': {
				color: '#28a745',
			},
			'&.-color-danger': {
				color: palette.error.main,
			},
			'&.-inverted': {
				color: invertedColor,
			},
			// icon
			'& .MuiIcon--fa': {
				verticalAlign: 'unset',
				padding: 2,
				'&.svg-inline--fa': {
					width: '1em',
				},
			},
			'& i.MuiIcon--fa': {
				display: 'block',
				'&:before': {
					display: 'block',
					fontSize: 20,
				},
			},
			// -------------------------------
			// sizes
			'&.-size-small': {
				fontSize: 20,
				'& i.MuiIcon--fa:before': {
					fontSize: 16,
				},
			},
			'&.-size-big': {
				fontSize: 28,
				'& i.MuiIcon--fa:before': {
					fontSize: 24,
				},
			},
			'&.-size-large': {
				fontSize: 32,
				'& i.MuiIcon--fa:before': {
					fontSize: 28,
				},
			},
			// background
			'&[class*="-bg"]': {
				width: '1.5em',
				height: '1.5em',
				padding: '0.25em',
			},
			'&.-bg-default': {
				backgroundColor: palette.grey[200],
			},
			'&.-bg-primary': {
				backgroundColor: palette.primary.main,
				color: invertedColor,
			},
			'&.-bg-secondary': {
				backgroundColor: palette.secondary.main,
				color: invertedColor,
			},
			'&.-bg-danger': {
				backgroundColor: palette.error.main,
				color: invertedColor,
			},
			'&.-bg-white': {
				backgroundColor: invertedColor,
			},
			'&.-bg-lightPrimary': {
				backgroundColor: palette.primary.light,
			},
			'&.-bg-lightSecondary': {
				backgroundColor: palette.secondary.light,
			},
			// shapes
			'&.-shape-square': {
				borderRadius: 0,
			},
			'&.-shape-circular': {
				borderRadius: '50%',
			},
			'&.-shape-round': {
				borderRadius: 4,
			},
			// COMBINATION
			'&.-bg-default.-link.-inverted': {
				color: palette.text.primary,
			},
			'&.-link.-inverted:not([class*="-color"])': {
				color: invertedColor,
			},
		},
	};
});

const Icon: React.SFC<IconProps> = ({
	bgColor,
	className,
	children,
	color,
	fontAwesomeProps,
	icon,
	inverted,
	link,
	push,
	size,
	shape,
	...props
}) => {
	const mainIcon = children || icon;
	const classes = useStyles();
	return (
		<MuiIcon
			component={link ? 'a' : 'span'}
			{...props}
			className={clsx(
				'MuiIcon-root',
				className,
				classes.root,
				bgColor && `-bg-${bgColor}`,
				color && `-color-${color}`,
				inverted && '-inverted',
				link && '-link',
				push && `-push-${push}`,
				shape && `-shape-${shape}`,
				size && `-size-${size}`,
			)}
			color={injectColor(color)}
		>
			{typeof mainIcon === 'string' && mainIcon.includes('fa-') ? (
				<i className={clsx('MuiIcon--fa', mainIcon)} {...fontAwesomeProps} />
			) : (
				mainIcon
			)}
		</MuiIcon>
	);
};

Icon.defaultProps = {
	bgColor: undefined,
	className: '',
	color: undefined,
	fontAwesomeProps: {},
	icon: '',
	inverted: false,
	link: false,
	push: '',
	size: '',
	shape: '',
};

export { Icon };
