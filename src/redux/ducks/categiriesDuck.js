import { createAction } from '../../helpers/redux';
import { collection, getDocs, getDoc, doc } from 'firebase/firestore';
import fireDB from '../../firebase';

const SET_CATEGORIES = 'userDuck/SET_CATEGORIES';
const SET_CURRENT_CATEGORY = 'userDuck/SET_CURRENT_CATEGORY';

export const setCategories = createAction(SET_CATEGORIES);
export const setCurrentCategory = createAction(SET_CURRENT_CATEGORY);

export const fetchCategories = (payload) => async (dispatch) => {
	let categoriesArray = [];
	await getDocs(collection(fireDB, 'categories')).then((res) =>
		res.forEach((doc) => categoriesArray.push(doc.data()))
	);
	dispatch(setCategories(categoriesArray));
};

export const fetchCurrentCategory = (id) => async (dispatch) => {
	const categoryCurrent = await getDoc(doc(fireDB, 'categories', id));
	dispatch(setCurrentCategory(categoryCurrent.data()));
};

const initialState = {
	categories: [],
	currentCategory: [],
};

const CategoriesDuck = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_CATEGORIES:
			return {
				...state,
				categories: payload,
			};
		case SET_CURRENT_CATEGORY:
			return {
				...state,
				currentCategory: payload,
			};
		default:
			return state;
	}
};

export default CategoriesDuck;
