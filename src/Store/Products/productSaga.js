import { call, put, takeLatest } from "redux-saga/effects";
import {productData , handleSearchApi} from "./productApi";



function* productList() {
    const data = yield call(productData)
    yield put ({
        type : "CALL_PRODUCT_LIST",
        payload : data
    })
}

export function* sagaProductList(){
    yield takeLatest ("SAGA_CALL_PRODUCT_LIST",productList)
}

function* searchApi(action) {
    const response = yield call(handleSearchApi, action.payload)
    yield put ({
        type : "SEARCH_PRODUCT_LIST",
        payload : response.slice(3,20)
    })
}

export function* sagaSearchItem(){
    yield takeLatest ("SAGA_SEARCH_PRODUCT_LIST",searchApi)
}