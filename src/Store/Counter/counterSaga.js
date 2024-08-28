import { call, put, takeLatest } from "redux-saga/effects";

function* incrementSaga() {
  yield put({ type: "INCREMENT" });
  // yield call()
}

export function* counterSagas() {
    yield takeLatest("INCREMENT_SAGA", incrementSaga);
}
