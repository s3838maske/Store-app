import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { sagaAddToCart } from "../Store/Cart/cartAction";
import { sagaAddToWish } from "../Store/Wishlist/wishAction";
import { toast } from "react-toastify";

function ProductCard(props) {
  const navigate = useNavigate();
  let { data, addToCartfunc, addToWishlistfunc, isLogin } = props;

  const handleAddToCart = () => {
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
      props.addtocartAction(data);
    }
  };

  const handleAddToWishlist = () => {
    let itemExits = props.wishList.some((item) => item.id === data.id);
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
      props.addToWishlist(data);
    }
  };
  
  return (
    <div>
      <div className="w-72 rounded-md border bg-white shadow-2xl">
        <div
          className="p-4 cursor-pointer"
          onClick={() => navigate(`ProductDetail/${data.id}`)}
        >
          <img
            src={data.image}
            alt={data.title}
            className="object-contain aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
          />

          <h1 className="inline-flex items-center text-lg font-semibold">
            {data.title.slice(0, 20)}
          </h1>
          <p className="mt-3 text-sm text-gray-600">
            {data.description.slice(0, 100)}
          </p>

          <div className="mt-5 flex items-center space-x-2">
            <span className="block text-base font-bold">Price : ₹ {data.price}/-</span>
          </div>
        </div>
        <div className="p-2">
          {!isLogin ? (
            <>
            <div className="flex items-center justify-between">

              <Link to={"/login"}>
                <button
                  type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"

                >
                  <ion-icon name="cart-outline"></ion-icon>
                  Add To Cart
                </button>
              </Link>

              <Link to={"/login"}>
                <button
                  type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"

                >
                  <ion-icon name="heart-outline"></ion-icon>
                  Add To Wishlist
                </button>
              </Link>

              </div>
            </>
          ) : (
            <>
               <div className="flex items-center justify-between">

              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={handleAddToCart}
              >
                <ion-icon name="cart-outline"></ion-icon>
                Add To Cart
              </button>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={handleAddToWishlist}
                id="addToCartBtn"
              >
                <ion-icon name="heart-outline" ></ion-icon>
                Add To Wishlist
              </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>

  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cartProduct.cart,
    wishList: state.wishList.wishListProduct,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      addtocartAction: sagaAddToCart,
      addToWishlist: sagaAddToWish,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
