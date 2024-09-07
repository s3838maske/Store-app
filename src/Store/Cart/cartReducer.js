import { toast } from "react-toastify";

const initialState = {
    cart: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART": {
            let itemExits = state.cart.find((value)=>value.payload.id===action.payload.payload.id)
            if (itemExits) { 
                toast.info("Product already exist", {
                          position: "top-center",
                          autoClose: 3000,
                          hideProgressBar: false,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "colored",
                        }); 
                return {
                    ...state,
                    cart: [...state.cart]
                };
            }else{
                toast.success("Added To Cart Successfully !!", {
                          position: "top-center",
                          autoClose: 3000,
                          hideProgressBar: false,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "colored",
                        });
                return {
                    ...state,
                    cart : [...state.cart, action.payload],
                }
            }
        }
        case "DELETE_TO_CART" : {
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.payload.id)
            }
        }
        default:
            return state;
        }
    };
    
export default cartReducer;

