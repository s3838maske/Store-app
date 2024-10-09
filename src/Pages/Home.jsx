import React, { useEffect, useState } from "react";
import ProductCard from "../Container/ProductCard";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { sagaProductList } from "../Store/Products/productAction";
import Sidebar from "../Components/Sidebar";
import Loading from "../Components/common/Loading";

function Home(props) {
  let [pagination, setPagination] = useState(10);

  const handlePagination = () => {
    if (pagination == 30) {
      return setPagination(0);
    }
    setPagination(pagination + 10);
  };

  useEffect(() => {

    props.productApiAction(pagination);

  }, [pagination]);

  return (
    <>
      {/* {!props.productListData && <Loading />} */}
      <div className="flex">
        <Sidebar />

        <div className="flex flex-col justify-center w-full">
          <div className="m-auto pt-20 grid place-items-center w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-3">
            {props.productListData?.map((post, i) => {
              return (
                
                  <ProductCard
                    key={i}
                    isLogin={props.isLogin}
                    addToWishlistfunc={props.wishFunc}
                    data={post}
                  />
                
              );
            })}
          </div>
          <button
            className="p-2 px-4 rounded-lg mb-3 text-white m-auto bg-slate-500 hover:bg-slate-700 transition-all hover:shadow-lg"
            onClick={handlePagination}
          >
            Load more
          </button>
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
