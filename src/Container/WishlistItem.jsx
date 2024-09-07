import React from "react";
import { connect } from "react-redux";

import { sagaAddToCart } from "../Store/Cart/cartAction";
import { bindActionCreators } from "redux";
// import { BookImage } from "lucide-react";

function WishlistItem(props) {
  return (
    <>
        <ul className="bg-white px-2 flex flex-col divide-y divide-gray-200">
      {props.wishListData.map((Items) => (
          <li className="flex flex-col py-6 sm:flex-row sm:justify-between" key={Items.payload.id} >
            <div className="flex w-full space-x-2 sm:space-x-4">
              <img
                className="h-20 w-20 flex-shrink-0 rounded object-contain outline-none dark:border-transparent sm:h-32 sm:w-32"
                src={Items.payload.images}
                alt={Items.payload.title}
              />
              <div className="flex w-full flex-col justify-between pb-4">
                <div className="flex w-full justify-between space-x-2 pb-2 gap-28">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                      {Items.payload.title}
                    </h3>
                    <p className="text-sm">{Items.payload.discription}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">₹{Items.payload.price} </p>
                  </div>
                </div>
                <div className="flex divide-x text-sm">
                  <button
                    type="button"
                    className="flex items-center space-x-2 px-2 py-1 pl-0"
                  >
                    <span>Remove</span>
                  </button>
                  <button
                    type="button"
                    className="flex items-center space-x-2 px-2 py-1"
                    onClick={()=>props.addToCartAction(Items.payload)}
                  >
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          </li>
      ))}
      </ul>
    </>
  );
}


const mapStateToProps = (state) => {
  return {
    wishListData: state.wishList.wishListProduct
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addToCartAction : sagaAddToCart
  },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(WishlistItem);
