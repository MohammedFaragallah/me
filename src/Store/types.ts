import { RouterState } from 'connected-react-router';
import { LocaleState, UIState } from 'Store/Reducers';

export enum ActionTypes {
	CHANGE_LANGUAGE,
	REGISTER_MENU_ITEM,
}

export interface StoreState {
	admin: any;
	router: RouterState;
	locale: LocaleState;
	ui: UIState;
}
