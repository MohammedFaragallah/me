import { Direction, Language, Languages } from 'localization/types';

export const localizationLanguages: Languages = {
	ar: { code: 'ar', label: 'عربى', dir: Direction.right },
	en: { code: 'en', label: 'English', dir: Direction.left },
};

export const DefaultLanguage: Language = {
	code: 'en',
	label: 'English',
	dir: Direction.left,
};

export const getTranslatedMessages = (languageCode: Language['code']): object =>
	Object.assign({}, require(`localization/messages/${languageCode}`));

export const getLocale = (languageCode: Language['code']) =>
	localizationLanguages[languageCode];
