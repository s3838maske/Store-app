import { all } from "redux-saga/effects";
import {cartSagas, deleteItemSaga} from './Cart/cartSaga';
import { wishSagas ,removeWishSagas} from './Wishlist/wishSaga';
import {sagaCategoryApi, sagaProductList, sagaSearchItem} from "./Products/productSaga";


function* rootSaga() {
    yield all([
        cartSagas(),
        deleteItemSaga(),
        wishSagas(),
        sagaProductList(),
        removeWishSagas(),
        sagaSearchItem(),
        sagaCategoryApi()
    ]);
}


export default rootSaga;


