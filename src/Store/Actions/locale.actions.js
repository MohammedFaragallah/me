import { CHANGE_LANGUAGE } from 'Store';

export const changeLanguage = (code, user) => dispatch =>
	dispatch({ type: CHANGE_LANGUAGE, payload: code });
