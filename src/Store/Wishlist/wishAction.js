const addToWish = (payload) => {

    return ({
        type : "ADD_TO_WISH",
        payload : payload
    })
}


const sagaAddToWish = (payload) => {

    return ({
        type : "SAGA_ADD_TO_WISH",
        payload : payload
    })
}

export {
    addToWish,
    sagaAddToWish
}