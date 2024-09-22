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

const removeToWish = (payload) => {

    return ({
        type : "REMOVE_TO_WISH",
        payload : payload
    })
}


const sagaRemoveToWish = (payload) => {

    return ({
        type : "SAGA_REMOVE_TO_WISH",
        payload : payload
    })
}

export {
    addToWish,
    sagaAddToWish,
    removeToWish,
    sagaRemoveToWish
}