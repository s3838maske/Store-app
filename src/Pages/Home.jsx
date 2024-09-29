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
      <div className="flex gap-8 bg-white">
        <div className="relative ml-12 m-2">
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
              <span className="text-lg font-medium"> Filter </span>

              <span className="transition group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </summary>

            <div className="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2">
              <div className="w-96 rounded border border-gray-200 bg-white">
                <header className="flex items-center justify-between p-4">
                  <button
                    type="button"
                    className="text-sm text-gray-900 underline underline-offset-4"
                  >
                    Reset
                  </button>
                </header>

                <ul className="space-y-1 border-t border-gray-200 p-4">
                  <li>
                    <label
                      htmlFor="FilterInStock"
                      className="inline-flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        id="FilterInStock"
                        className="size-5 rounded border-gray-300"
                      />

                      <span className="text-sm font-medium text-gray-700">
                        {" "}
                        Women's clothing
                      </span>
                    </label>
                  </li>
                  <li>
                    <label
                      htmlFor="FilterInStock"
                      className="inline-flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        id="FilterInStock"
                        className="size-5 rounded border-gray-300"
                      />

                      <span className="text-sm font-medium text-gray-700">
                        {" "}
                        Men's clothing
                      </span>
                    </label>
                  </li>

                  <li>
                    <label
                      htmlFor="FilterPreOrder"
                      className="inline-flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        id="FilterPreOrder"
                        className="size-5 rounded border-gray-300"
                      />

                      <span className="text-sm font-medium text-gray-700">
                        {" "}
                        Electronics
                      </span>
                    </label>
                  </li>

                  <li>
                    <label
                      htmlFor="FilterOutOfStock"
                      className="inline-flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        id="FilterOutOfStock"
                        className="size-5 rounded border-gray-300"
                      />

                      <span className="text-sm font-medium text-gray-700">
                        {" "}
                        Jewelery
                      </span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </details>
        </div>
      </div>
      <div className="mx-auto grid place-items-center w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        {props.productListData?.map((post, i) => {
          return (
            <>
              <ProductCard
                isLogin={props.isLogin}
                addToWishlistfunc={props.wishFunc}
                data={post}
                key={i}
              />
            </>
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
