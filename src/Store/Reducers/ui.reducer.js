import { REGISTER_MENU_ITEM } from 'Store';

const initialState = { menuLinks: [] };

const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case REGISTER_MENU_ITEM: {
			return {
				...state,
				menuLinks: [...state.menuLinks, payload],
			};
		}
		default: {
			return state;
		}
	}
};

export default reducer;
