import { put, takeLatest } from "redux-saga/effects";

function* addToWishSaga(payload){

    yield put({ type: "ADD_TO_WISH",
        payload : payload.payload
});

}

export function* wishSagas(){
    yield takeLatest ("SAGA_ADD_TO_WISH", addToWishSaga)
}


function* removeToWishSaga(payload){

    yield put({ type: "REMOVE_TO_WISH",
        payload : payload.payload
});

}

export function* removeWishSagas(){
    yield takeLatest ("SAGA_REMOVE_TO_WISH", removeToWishSaga)
}

