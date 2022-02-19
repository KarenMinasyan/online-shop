import { createAction } from '../../helpers/redux';

const SET_LANGUAGE = 'appDuck/SET_LANGUAGE';

export const setLanguage = createAction(SET_LANGUAGE);

const initialState = {
	currentLanguage: localStorage.getItem('i18nextLng') || null,
};

const AppDuck = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_LANGUAGE:
			return {
				...state,
				currentLanguage: payload,
			};
		default:
			return state;
	}
};

export default AppDuck;
