export const LocalizationLanguages = {
	ar: { code: 'ar', label: 'عربى', dir: 'rtl' },
	en: { code: 'en', label: 'English', dir: 'ltr' },
};

export const DefaultLanguage = { code: 'en', label: 'English', dir: 'ltr' };

export const getTranslatedMessages = languageCode =>
	Object.assign({}, require(`localization/messages/${languageCode}`));

export const getLocale = languageCode => LocalizationLanguages[languageCode];
