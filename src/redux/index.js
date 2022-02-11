import { combineReducers } from "redux";
import UserDuck from "./ducks/userDuck";
import CategoriesDuck from "./ducks/categiriesDuck";
import AppDuck from "./ducks/appDuck";
import ProductsDuck from "./ducks/productsDuck";

const rootReducer = combineReducers({
    AppDuck,
    UserDuck,
    CategoriesDuck,
    ProductsDuck
})

export default rootReducer;
