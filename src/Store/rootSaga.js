import { all } from "redux-saga/effects";
import {cartSagas, deleteItemSaga} from './Cart/cartSaga';
import { wishSagas ,removeWishSagas} from './Wishlist/wishSaga';
import {sagaProductList, sagaSearchItem} from "./Products/productSaga";


function* rootSaga() {
    yield all([
        cartSagas(),
        deleteItemSaga(),
        wishSagas(),
        sagaProductList(),
        removeWishSagas(),
        sagaSearchItem()
    ]);
}


export default rootSaga;


