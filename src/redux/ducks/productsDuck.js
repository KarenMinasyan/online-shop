import { createAction } from '../../helpers/redux';
import { collection, getDocs } from 'firebase/firestore';
import fireDB from '../../firebase';

const SET_PRODUCTS = 'productsDuck/SET_PRODUCTS';
const FILTER_PRODUCTS = 'productsDuck/FILTER_PRODUCTS';
export const setProducts = createAction(SET_PRODUCTS);
export const setTypeProducts = createAction(FILTER_PRODUCTS);

export const fetchProducts = (payload) => async (dispatch) => {
	let productsArray = [];
	await getDocs(collection(fireDB, 'products')).then((res) =>
		res.forEach((doc) => productsArray.push(doc.data()))
	);
	dispatch(setProducts(productsArray));
};

const initialState = {
	products: [],
};

const ProductsDuck = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_PRODUCTS:
			return {
				...state,
				products: payload,
			};
		case FILTER_PRODUCTS:
			const { value, products } = payload;
			const felteredProducts = products.filter((item) => {
				if (item.name_en.includes(value) || item.name_hy.includes(value)) {
					return true;
				}
			});
			return {
				...state,
				products: felteredProducts,
			};
		default:
			return state;
	}
};

export default ProductsDuck;
