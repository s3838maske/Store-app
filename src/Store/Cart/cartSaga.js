
import { put, takeLatest } from "redux-saga/effects";

function* addToCartSaga(payload) {
  yield put({ type: "ADD_TO_CART",
              payload : payload
  });
}

export function* cartSagas() {
    yield takeLatest("SAGA_ADD_TO_CART", addToCartSaga);
}
