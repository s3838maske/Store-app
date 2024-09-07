
const addToCart = (payload) => {

    return ( {
        type : "ADD_TO_CART",
        payload : payload
    })
}

const sagaAddToCart = (payload) => {
    return ({
        type : "SAGA_ADD_TO_CART",
        payload : payload
    })
}

const deleteToCart = (payload) => {

    return ( {
        type : "DELETE_TO_CART",
        payload : payload
    })
}

const sagaDeleteToCart = (payload) => {
    return ({
        type : "SAGA_DELETE_TO_CART",
        payload : payload
    })
}

export {
    addToCart,
    sagaAddToCart,
    sagaDeleteToCart,
    deleteToCart
}