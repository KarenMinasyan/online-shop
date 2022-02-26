import { combineReducers } from 'redux';
import UserDuck from './ducks/userDuck';
import CategoriesDuck from './ducks/categiriesDuck';
import AppDuck from './ducks/appDuck';
import ProductsDuck from './ducks/productsDuck';
import CartDuck from './ducks/cartDuck';
import OrderDuck from './ducks/orderDuck';

const rootReducer = combineReducers({
	AppDuck,
	UserDuck,
	CategoriesDuck,
	ProductsDuck,
	CartDuck,
	OrderDuck,
});

export default rootReducer;
