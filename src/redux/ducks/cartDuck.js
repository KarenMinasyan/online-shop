import { createAction } from '../../helpers/redux';

const ADD_TO_CART = 'userDuck/ADD_TO_CART'
const DELETE_FROM_CART = 'userDuck/DELETE_FROM_CART'

export const addCart = createAction(ADD_TO_CART)
export const deleteCart = createAction(DELETE_FROM_CART)

const initialState = {
    cartItems: JSON.parse(localStorage.getItem('cartItems')) ?? []
}

const CartDuck = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_TO_CART:
            return {
                ...state,
                cartItems: [...state.cartItems, payload]
            }
        case DELETE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(obj => obj.id !== payload.id)
            }
        default:
            return state
    }
}

export default CartDuck;
