import { Dispatch } from 'redux';
import { ActionTypes } from 'Store';

export const registerMenuItem = (label: string) => (dispatch: Dispatch) =>
	dispatch({ type: ActionTypes.REGISTER_MENU_ITEM, payload: label });
