import { ActionTypes } from 'Store';
import { Language } from 'localization/types';

export interface LocaleState {
	locale: Language;
	messages: object;
	preferredLanguage: Language | undefined;
}

export type LocaleActions = ChangeLanguageAction;

export interface ChangeLanguageAction {
	type: ActionTypes.CHANGE_LANGUAGE;
	payload: Language['code'];
}
