import React, { useEffect } from "react";
import ProductCard from "../Container/ProductCard";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { sagaProductList } from "../Store/Products/productAction";
import Sidebar from "../Components/Sidebar";

function Home(props) {
  useEffect(() => {
    props.productApiAction();
  }, []);

  return (
    <>
      <div className="flex justify-between">
        <Sidebar />

        <div className="m-auto pt-20 grid place-items-center w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-3">
          {props.productListData?.map((post, i) => {
            return (
              <>
                <ProductCard
                  key={i}
                  isLogin={props.isLogin}
                  addToWishlistfunc={props.wishFunc}
                  data={post}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    productListData: state.products.ListOfItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      productApiAction: sagaProductList,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
