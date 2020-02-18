import { ActionTypes, UIActions } from 'Store';
import { UIState } from 'Store/Reducers';

const initialState: UIState = {
	menuLinks: [],
};

export const uiReducer = (state = initialState, action: UIActions) => {
	switch (action.type) {
		case ActionTypes.REGISTER_MENU_ITEM: {
			return {
				...state,
				menuLinks: [...new Set([...state.menuLinks, action.payload])],
			};
		}
		default: {
			return state;
		}
	}
};

export default uiReducer;
// new Set(state.menuLinks).add(action.payload),
// [...new Set(myArray)];
