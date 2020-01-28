import { REGISTER_MENU_ITEM } from 'Store';

export const registerMenuItem = label => dispatch =>
	dispatch({ type: REGISTER_MENU_ITEM, payload: label });
