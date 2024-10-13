
const addToCart = (payload) => {

    return ( {
        type : "ADD_TO_CART",
        payload : {...payload,
                    quantity:1
                }
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

const incrementQuantity = (payload) => {
    return ({
        type: "INCREMENT_QUANTITY",
        payload: payload
    })
}
const decrementQuantity = (payload) => {
    return ({
        type: "DECREMENT_QUANTITY",
        payload: payload
    })
}

const clearCart = () => {
    return ({
        type:"CLEAR_CART"
    })
}

export {
    addToCart,
    sagaAddToCart,
    sagaDeleteToCart,
    deleteToCart,
    clearCart,
    incrementQuantity,
    decrementQuantity
}