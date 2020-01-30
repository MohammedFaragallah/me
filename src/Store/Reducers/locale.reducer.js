import {
	DefaultLanguage,
	getLocale,
	getTranslatedMessages,
} from 'localization';
import { CHANGE_LANGUAGE } from 'Store';

const locale = getLocale(DefaultLanguage.code);

export const initialState = {
	locale,
	messages: getTranslatedMessages(locale.code),
	preferredLanguage: {},
};

const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case CHANGE_LANGUAGE: {
			const locale = getLocale(payload);
			console.log('TCL: reducer -> locale', locale);
			console.log('TCL: reducer -> payload', payload);

			return {
				...state,
				locale,
				messages: getTranslatedMessages(payload),
				preferredLanguage: locale,
			};
		}

		default:
			return state;
	}
};

export default reducer;
