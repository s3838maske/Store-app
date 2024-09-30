import React from "react";
import WishlistItem from "../Container/WishlistItem";
import { connect } from "react-redux";

function wishList(props) {
  return (
    <>
      <div className="rounded-xl mt-14 mx-auto flex max-w-3xl flex-col space-y-4 p-6 px-2 sm:p-10 sm:px-2">
        <h2 className="text-3xl font-bold">Your Wishlist</h2>

        {props.wishListData.length === 0 ? (
          <h1 className="text-4xl h-96 text-center font-semibold text-gray-600">
            No Product Available
          </h1>
        ) : (
          <WishlistItem />
        )}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    wishListData: state.wishList.wishListProduct,
  };
};

export default connect(mapStateToProps)(wishList);
