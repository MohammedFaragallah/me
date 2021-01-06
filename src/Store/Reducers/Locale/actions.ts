import { Dispatch } from 'redux';

import { ActionTypes, ChangeLanguageAction } from 'Store';
import { Language } from 'localization/types';

export const changeLanguage = (code: Language['code']) => (
	dispatch: Dispatch,
) =>
	dispatch<ChangeLanguageAction>({
		type: ActionTypes.CHANGE_LANGUAGE,
		payload: code,
	});
