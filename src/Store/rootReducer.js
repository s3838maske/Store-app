import { combineReducers } from "redux";
import CartReducer from './Cart/cartReducer'
import wishList  from "./Wishlist/wishReducer";

const rootReducers = combineReducers({
    cartProduct: CartReducer,
    wishLish : wishList
});

export default rootReducers;
