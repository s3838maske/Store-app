const incrementCount = () => {
    return {
        type: "INCREMENT",
    }
}

const incrementSagaCount = () => {
    return {
        type: "INCREMENT_SAGA",
    }
}

export {
    incrementCount,
    incrementSagaCount
}