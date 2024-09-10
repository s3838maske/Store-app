
import React, { useEffect } from "react";
import ProductCard from "../Container/ProductCard";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { sagaProductList } from "../Store/Products/productAction";

function Home(props) {
  useEffect(() => {
    props.productApiAction();
    // productData();
  }, []);

  return (
    <>
    
        <div className=" min-h-full py-20 px-4 max-w-screen-xl flex flex-wrap gap-x-6  justify-center gap-y-9 mx-auto">
          {/* {!props.productListData &&  } */}
          {props.productListData?.map((post, i) => {
            return (
              <ProductCard
                isLogin={props.isLogin}
                addToWishlistfunc={props.wishFunc}
                data={post}
                key={i}
              />
            );
          })}
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
