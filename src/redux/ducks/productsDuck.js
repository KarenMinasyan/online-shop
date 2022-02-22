import { createAction } from '../../helpers/redux';
import { collection, getDocs, query, where } from 'firebase/firestore';
import fireDB from '../../firebase';

const SET_PRODUCTS = 'productsDuck/SET_PRODUCTS';
const FILTER_PRODUCTS = 'productsDuck/FILTER_PRODUCTS';
const SET_PRODUCTS_BY_ID = 'productsDuck/SET_PRODUCTS_BY_ID';

export const setProducts = createAction(SET_PRODUCTS);
export const setTypeProducts = createAction(FILTER_PRODUCTS);
export const setProductsById = createAction(SET_PRODUCTS_BY_ID);

export const fetchProducts = (payload) => async (dispatch) => {
	let productsArray = [];
	await getDocs(collection(fireDB, 'products')).then((res) =>
		res.forEach((doc) => productsArray.push(doc.data()))
	);
	dispatch(setProducts(productsArray));
};

export const fetchProductsById = (id) => async (dispatch) => {
	let productsArray = [];
	const q = await getDocs(
		query(collection(fireDB, 'products'), where('cat_id', '==', +id))
	);
	q.forEach((doc) => {
		console.log(doc.data());
		productsArray.push(doc.data());
	});

	dispatch(setProductsById(productsArray));
};

const initialState = {
	products: [],
	productsById: [],
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
		case SET_PRODUCTS_BY_ID:
			return {
				...state,
				productsById: payload,
			};
		default:
			return state;
	}
};

export default ProductsDuck;
