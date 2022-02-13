import {createAction} from "../../helpers/redux";
import {collection, getDocs} from 'firebase/firestore';
import fireDB from "../../firebase";

const SET_PRODUCTS = 'userDuck/SET_PRODUCTS';
const FELTER_PRODUCTS = 'userDuck/FELTER_PRODUCTS';
export const setProducts = createAction(SET_PRODUCTS)
export const setTypeProducts = createAction(FELTER_PRODUCTS);

export const fetchProducts = (payload) => async (dispatch) => {
    let productsArray = []
    await getDocs(collection(fireDB, "products"))
        .then(res => res.forEach(doc => productsArray.push(doc.data())))
        dispatch(setProducts(productsArray))
}

const initialState = {
    products: []
}

const ProductsDuck = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: payload
            }
        case FELTER_PRODUCTS:
            const { products } = state;
            const felteredProducts = products.filter((item) => item.name_en.includes(payload) || item.name_hy.includes(payload));
            return {
                ...state,
                products: felteredProducts
            }
        default:
            return state
    }
}

export default ProductsDuck;
