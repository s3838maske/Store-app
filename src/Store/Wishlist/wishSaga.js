import { put, takeLatest } from "redux-saga/effects";

function* addToWishSaga(payload){

    yield put({ type: "ADD_TO_WISH",
        payload : payload
});

}

export function* wishSagas(){
    yield takeLatest ("SAGA_ADD_TO_CART", addToWishSaga)
}

