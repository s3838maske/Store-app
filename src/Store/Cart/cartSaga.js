
import { put, takeLatest } from "redux-saga/effects";

function* addToCartSaga(payload) {
  yield put({ type: "ADD_TO_CART",
              payload : payload
  });
}

export function* cartSagas() {
    yield takeLatest("SAGA_ADD_TO_CART", addToCartSaga);
}

function* deleteToCartSaga(payload){
  yield put({
    type: "DELETE_TO_CART",
    payload: payload
  })
}

export function* deleteItemSaga(){
  yield takeLatest("SAGA_DELETE_TO_CART",deleteToCartSaga)
}