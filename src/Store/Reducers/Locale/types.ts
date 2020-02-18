import { Language } from 'Localization/types';
import { ActionTypes } from 'Store';

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
