import React from "react";
import { connect } from "react-redux";

import { sagaAddToCart } from "../Store/Cart/cartAction";
import { bindActionCreators } from "redux";
import { toast } from "react-toastify";
import { sagaRemoveToWish } from "../Store/Wishlist/wishAction";


function WishlistItem(props) {
  const handleProduct = (data) => {
    let itemExits = props.cart.some((item) => item.id === data.id);
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
    } else {
      toast.success("Added To Cart Successfully !!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      props.addToCartAction(data);
      props.removeToWishAction(data.id)
    }
  };

  return (
    <>
      <ul className="bg-white rounded-lg px-2 flex flex-col divide-y divide-gray-200">
        {props.wishListData.map((Items) => (
          <li
            className="flex flex-col py-6 sm:flex-row sm:justify-between"
            key={Items.id}
          >
            <div className="flex w-full space-x-2 sm:space-x-4">
              <img
                className="h-20 w-20 flex-shrink-0 rounded object-contain outline-none dark:border-transparent sm:h-32 sm:w-32"
                src={Items.images}
                alt={Items.title}
              />
              <div className="flex w-full flex-col justify-between pb-4">
                <div className="flex w-full justify-between space-x-2 pb-2 gap-28">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                      {Items.title}
                    </h3>
                    <p className="text-sm">{Items.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">₹{Items.price} </p>
                  </div>
                </div>
                <div className="flex divide-x text-sm">
                  <button
                    type="button"
                    onClick={() => props.removeToWishAction(Items.id)}
                  >
                    <span>Remove</span>
                  </button>
                  <button
                    type="button"
                    className="flex items-center space-x-2 px-2 py-1"
                    onClick={() => handleProduct(Items)}
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
    wishListData: state.wishList.wishListProduct,
    cart: state.cartProduct.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      addToCartAction: sagaAddToCart,
      removeToWishAction: sagaRemoveToWish,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(WishlistItem);
