import { ActionTypes } from 'Store';

export interface UIState {
	menuLinks: string[];
}

export type UIActions = RegisterMenuItem;

export interface RegisterMenuItem {
	type: ActionTypes.REGISTER_MENU_ITEM;
	payload: string;
}
