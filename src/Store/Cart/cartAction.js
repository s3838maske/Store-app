
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

export {
    addToCart,
    sagaAddToCart
}