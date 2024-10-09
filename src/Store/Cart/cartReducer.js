
const initialState = {
    cart: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART": {
                return {
                    ...state,
                    cart : [...state.cart, action.payload],
                }
        }
        case "DELETE_TO_CART" : {
    
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        }
        case "CLEAR_CART" : {

            return {
                cart : []
            }
        }
        case "INCREMENT_QUANTITY":
            return {
                ...state,
                cart: state.cart.map((product) =>
                    product.id === action.payload
                      ? { ...product, quantity: (product.quantity || 1) + 1 }
                      : product
                  ),
            }
        case "DECREMENT_QUANTITY":
            return {
                ...state,
                cart: state.cart.map((product) =>
                    product.id === action.payload
                      ? { ...product, quantity: (product.quantity || 1) - 1 }
                      : product
                  ),
            }
        default:
            return state;
        }
    };
    
export default cartReducer;

