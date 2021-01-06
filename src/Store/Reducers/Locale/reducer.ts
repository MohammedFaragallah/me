import { ActionTypes, LocaleActions, LocaleState } from 'Store';
import {
	DefaultLanguage,
	getLocale,
	getTranslatedMessages,
} from 'localization';

const locale = getLocale(DefaultLanguage.code);

const initialState: LocaleState = {
	locale,
	messages: getTranslatedMessages(locale.code),
	preferredLanguage: undefined,
};

export const localeReducer = (state = initialState, action: LocaleActions) => {
	switch (action.type) {
		case ActionTypes.CHANGE_LANGUAGE: {
			const locale = getLocale(action.payload);

			return {
				...state,
				locale,
				messages: getTranslatedMessages(action.payload),
				preferredLanguage: locale,
			};
		}

		default:
			return state;
	}
};
