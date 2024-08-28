import { all } from "redux-saga/effects";

import {counterSagas} from './Counter/counterSaga';

function* rootSaga() {
    yield all([
        counterSagas(),
    ]);
}

export default rootSaga;


