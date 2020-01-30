import { CHANGE_LANGUAGE } from 'Store';

export const changeLanguage = code => dispatch =>
	dispatch({ type: CHANGE_LANGUAGE, payload: code });
