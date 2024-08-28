import { combineReducers } from "redux";
import CartReducer from './Cart/cartReducer'


const rootReducers = combineReducers({
    cartProduct: CartReducer
});

export default rootReducers;
