export enum Direction {
	right = 'rtl',
	left = 'ltr',
}

export interface Language {
	code: string;
	label: string;
	dir: Direction;
}

export interface Languages {
	[languageKey: string]: Language;
}
