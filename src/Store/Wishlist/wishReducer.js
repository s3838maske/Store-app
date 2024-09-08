
const initialState = {
    wishListProduct : [],
}

const wishListReducer = (state = initialState , action) => {
    switch (action.type) {
        case "ADD_TO_WISH":
            {
                return {
                    ...state,
                    wishListProduct : [...state.wishListProduct,action.payload]
                }
            }
        case "REMOVE_TO_WISH" : {
            return {
                ...state,
                wishListProduct : state.wishListProduct.filter(item => item.id !== action.payload)
            }
        }
        
        default:
            return state;
    }
}

export default wishListReducer;