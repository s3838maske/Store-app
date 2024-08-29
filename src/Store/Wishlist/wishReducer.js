
const initialState = {
    wishList : [],
}

const wishList = (state = initialState , action) => {

    switch (action.type) {
        case "ADD_TO_WISH":
            {
                return {
                    ...state,
                    wishList : [...state.wishList,action.payload]
                }
            }
        
        default:
            return state;
    }
}

export default wishList;