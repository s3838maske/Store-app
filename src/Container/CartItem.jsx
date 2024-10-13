import React from "react";
import { connect, useDispatch } from "react-redux";
import { decrementQuantity, incrementQuantity, sagaDeleteToCart } from "../Store/Cart/cartAction";
import { bindActionCreators } from "redux";


 function CartItem(props) {

  const handleIncrement = (itemId) => {
    console.log("called increment");
    props.incrementAction(itemId)
    
  }
  const handleDecrement = (itemId) => {
    console.log("called decrement");
    props.decrementAction(itemId)

  }


  const dispatch = useDispatch()
  return (
    <>
      <ul role="list" className="bg-white rounded-lg divide-y divide-gray-200">
        {props.cart.map((product) => (
          <div key={product.id} >
            <li className="flex py-6 px-5 sm:py-6 ">
              <div className="flex-shrink-0">
                <img
                  src={product.images}
                  alt={product.title}
                  className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
                />
              </div>

              <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                  <div>
                    <div className="flex justify-between">
                      <h3 className="text-sm">
                        <a
                          href={product.images}
                          className="font-semibold text-black"
                        >
                          {product.title}
                        </a>
                      </h3>
                    </div>
                    <div className="mt-1 flex items-end">
                      <p className="text-xs font-medium text-gray-500 line-through">
                      ₹{product.price+75}
                      </p>
                      <p className="text-lg font-medium text-green-600">
                        &nbsp;&nbsp;₹ {product.price}
                      </p>
                      &nbsp;&nbsp;
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <div className="mb-2 flex">
              <div className="min-w-24 flex">
                <button type="button" className="h-7 w-7"
                onClick={()=>handleDecrement(product.id)}
                >
                  -
                </button>
                <input
                  type="text"
                  className="mx-1 h-7 w-9 rounded-md border text-center"
                  // defaultValue={product.quantity}
                  value={product.quantity || 1}
                />
                <button
                  type="button"
                onClick={()=>handleIncrement(product.id)}
                  className="flex h-7 w-7 items-center justify-center"
                >
                  +
                </button>
              </div>
              <div className="ml-6 flex text-sm">
                <button
                  type="button"
                  onClick={()=>dispatch(sagaDeleteToCart(product.id))}
                  className="flex items-center space-x-1 px-2 py-1 pl-0"
                >
                  <ion-icon name="trash-outline"></ion-icon>
                  <span className="text-xs font-medium text-red-500">
                    Remove
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
     cart : state.cartProduct.cart
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    incrementAction : incrementQuantity,
    decrementAction : decrementQuantity
  },dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(CartItem);
