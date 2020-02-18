import { Direction, Language, Languages } from 'Localization/types';

export const LocalizationLanguages: Languages = {
	ar: { code: 'ar', label: 'عربى', dir: Direction.right },
	en: { code: 'en', label: 'English', dir: Direction.left },
};

export const DefaultLanguage: Language = {
	code: 'en',
	label: 'English',
	dir: Direction.left,
};

export const getTranslatedMessages = (languageCode: Language['code']): object =>
	Object.assign({}, require(`Localization/messages/${languageCode}`));

export const getLocale = (languageCode: Language['code']) =>
	LocalizationLanguages[languageCode];
