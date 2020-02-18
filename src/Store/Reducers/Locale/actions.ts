import { Language } from 'Localization/types';
import { Dispatch } from 'redux';
import { ActionTypes, ChangeLanguageAction } from 'Store';

export const changeLanguage = (code: Language['code']) => (
	dispatch: Dispatch,
) =>
	dispatch<ChangeLanguageAction>({
		type: ActionTypes.CHANGE_LANGUAGE,
		payload: code,
	});
