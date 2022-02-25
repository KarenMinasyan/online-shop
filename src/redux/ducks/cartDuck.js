import { createAction } from '../../helpers/redux';
import { addDoc, collection } from 'firebase/firestore';
import fireDB from '../../firebase';

const ADD_TO_CART = 'cartDuck/ADD_TO_CART';
const DELETE_FROM_CART = 'cartDuck/DELETE_FROM_CART';
const CONFIRM_ORDER = 'cartDuck/CONFIRM_ORDER';

export const addCart = createAction(ADD_TO_CART);
export const deleteCart = createAction(DELETE_FROM_CART);
export const confirmOrder = createAction(CONFIRM_ORDER);

export const confirm = (uid, products) => async (dispatch) => {
	products.map(
		async (product) =>
			await addDoc(collection(fireDB, 'orders'), {
				user_id: uid,
				...product,
			})
	);
	dispatch({ type: CONFIRM_ORDER });
	localStorage.clear('cartItems');
};

const initialState = {
	cartItems: JSON.parse(localStorage.getItem('cartItems')) ?? [],
};

const CartDuck = (state = initialState, { type, payload }) => {
	switch (type) {
		case ADD_TO_CART:
			return {
				...state,
				cartItems: [...state.cartItems, payload],
			};
		case DELETE_FROM_CART:
			return {
				...state,
				cartItems: state.cartItems.filter((obj) => obj.id !== payload.id),
			};
		case CONFIRM_ORDER:
			return {
				...state,
				cartItems: [],
			};
		default:
			return state;
	}
};

export default CartDuck;
