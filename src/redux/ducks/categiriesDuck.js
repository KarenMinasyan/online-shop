import { createAction } from '../../helpers/redux';
import { collection, getDocs } from 'firebase/firestore';
import fireDB from '../../firebase';

const SET_CATEGORIES = 'userDuck/SET_CATEGORIES';

export const setCategories = createAction(SET_CATEGORIES);

export const fetchCategories = (payload) => async (dispatch) => {
	let categoriesArray = [];
	await getDocs(collection(fireDB, 'categories')).then((res) =>
		res.forEach((doc) => categoriesArray.push(doc.data()))
	);
	dispatch(setCategories(categoriesArray));
};

const initialState = {
	categories: [],
};

const CategoriesDuck = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_CATEGORIES:
			return {
				...state,
				categories: payload,
			};
		default:
			return state;
	}
};

export default CategoriesDuck;
