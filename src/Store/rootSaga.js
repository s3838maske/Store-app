import { all } from "redux-saga/effects";
import {cartSagas, deleteItemSaga} from './Cart/cartSaga';
import {wishSagas} from './Wishlist/wishSaga';
import {sagaProductList} from "./Products/productSaga";

function* rootSaga() {
    yield all([
        cartSagas(),
        deleteItemSaga(),
        wishSagas(),
        sagaProductList(),
    ]);
}


export default rootSaga;


