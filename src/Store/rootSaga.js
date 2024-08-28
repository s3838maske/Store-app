import { all } from "redux-saga/effects";
import {cartSagas} from './Cart/cartSaga';

function* rootSaga() {
    yield all([
        cartSagas()
    ]);
}

export default rootSaga;


