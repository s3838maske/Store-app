import { combineReducers } from "redux";
import CartReducer from './Cart/cartReducer'
import wishListReducer from "./Wishlist/wishReducer";
import productReducer from "./Products/productReducer";

const rootReducers = combineReducers({
    cartProduct: CartReducer,
    wishList : wishListReducer,
    products : productReducer
});

export default rootReducers;
