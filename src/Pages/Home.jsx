// import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../Container/ProductCard";
import Loading from "../Components/common/Loading";
// import Error from "../Components/common/Error";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { sagaProductList } from "../Store/Products/productAction";

function Home(props) {
  // const [product, setProduct] = useState([]);
  // const [error , setError] = useState('');

  // const productData = async () => {
  //   try {
  //     // const res = await axios.get("https://api.escuelajs.co/api/v1/products");
  //     const res = await axios.get("https://fakestoreapi.com/products");
  //     setProduct(res.data.slice(6,30));
  //   } catch (error) {
  //     setError(error.message)
  //   }
  // };

  // console.log(props.productListData);

  useEffect(() => {
    props.productApiAction();
    // productData();
  }, []);

  return (
    <>
      {props.productListData.length === 0 ? (
        <Loading />
      ) : (
        <div className=" min-h-full py-20 px-4 max-w-screen-xl flex flex-wrap gap-x-6  justify-center gap-y-9 mx-auto">
          {props.productListData.map((post, i) => {
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
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  // console.log(state.products.ListOfItems);
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
