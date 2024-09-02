import { combineReducers } from "redux";
import CartReducer from './Cart/cartReducer'
import wishListReducer from "./Wishlist/wishReducer";

const rootReducers = combineReducers({
    cartProduct: CartReducer,
    wishList : wishListReducer
});

export default rootReducers;
