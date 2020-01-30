import { REGISTER_MENU_ITEM } from 'Store';

const initialState = { menuLinks: [] };

const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case REGISTER_MENU_ITEM: {
			return !state.menuLinks.includes(payload)
				? {
						...state,
						menuLinks: [...state.menuLinks, payload],
				  }
				: state;
		}
		default: {
			return state;
		}
	}
};

export default reducer;
