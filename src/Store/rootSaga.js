import { all } from "redux-saga/effects";
import {cartSagas} from './Cart/cartSaga';
import {wishSagas} from './Wishlist/wishSaga';

function* rootSaga() {
    yield all([
        cartSagas(),
        wishSagas()
    ]);
}


export default rootSaga;


