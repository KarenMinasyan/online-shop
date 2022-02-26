import { createAction } from '../../helpers/redux';
import { collection, getDocs, query, where } from 'firebase/firestore';
import fireDB from '../../firebase';

const SET_ORDERS = 'ordersDuck/SET_ORDERS';
export const setOrders = createAction(SET_ORDERS);

export const fetchOrders = (id) => async (dispatch) => {
	let ordersArray = [];
	const q = await getDocs(
		query(collection(fireDB, 'orders'), where('user_id', '==', id))
	);
	q.forEach((doc) => {
		ordersArray.push(doc.data());
	});

	dispatch(setOrders(ordersArray));
};

const initialState = {
	orders: [],
};

const OrderDuck = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_ORDERS:
			return {
				...state,
				orders: payload,
			};
		default:
			return state;
	}
};

export default OrderDuck;
