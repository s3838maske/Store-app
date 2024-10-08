import { call, put, takeLatest } from "redux-saga/effects";
import {productData , handleSearchApi, handleCategoryApi} from "./productApi";



function* productList(action) {
    const data = yield call(productData , action.payload)
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
        payload : response
    })
}

export function* sagaSearchItem(){
    yield takeLatest ("SAGA_SEARCH_PRODUCT_LIST",searchApi)
}


function* categoryApi(action) {
    const response = yield call(handleCategoryApi, action.payload)
    yield put ({
        type : "CATEGORY_PRODUCT",
        payload : response
    })
}

export function* sagaCategoryApi(){
    yield takeLatest ("SAGA_CATEGORY_PRODUCT",categoryApi)
}