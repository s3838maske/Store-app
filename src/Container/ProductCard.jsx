import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { sagaAddToCart } from "../Store/Cart/cartAction";
import { sagaAddToWish } from "../Store/Wishlist/wishAction";

function ProductCard(props) {
  const navigate = useNavigate();
  let { data, addToCartfunc, addToWishlistfunc, isLogin } = props;

  return (
    <div >
      <div className="w-72 rounded-md border bg-white shadow-2xl">
        <img
          src={data.image}
          alt={data.title}
          className="object-contain aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
        />
        <div className="p-4" onClick={() => navigate(`ProductDetail/${data.id}`)}>
          <h1 className="inline-flex items-center text-lg font-semibold">
            {data.title.slice(0, 20)}
          </h1>
          <p className="mt-3 text-sm text-gray-600">
            {data.description.slice(0, 100)}
          </p>

          <div className="mt-5 flex items-center space-x-2">
            <span className="block text-base font-semibold">Price : </span>
            <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-base font-medium">
              {data.price}/-
            </span>
          </div>
        </div>
        <div className="p-2">
        {!isLogin ? (
            <>
              <Link to={"/login"}>
                <button
                  type="button"
                  className="flex justify-center items-center gap-1 mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  <ion-icon name="cart-outline"></ion-icon>
                  Add to Cart
                </button>
              </Link>

              <Link to={"/login"}>
                <button
                  type="button"
                  className="flex justify-center items-center gap-1 mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  <ion-icon name="heart-outline"></ion-icon>
                  Add to Wishlist
                </button>
              </Link>
            </>
          ) : (
            <>
              <button
                type="button"
                className="flex justify-center items-center gap-1 mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                onClick={() => props.addtocartAction(data)}
              >
                <ion-icon name="cart-outline"></ion-icon>
                Add to Cart
              </button>
              <button
                type="button"
                className="flex justify-center items-center gap-1 mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                onClick={() => props.addToWishlist(data)}
                id="addToCartBtn"
              >
                <ion-icon name="heart-outline"></ion-icon>
                Add to Wishlist
              </button>
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
