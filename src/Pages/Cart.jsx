import React, { useEffect, useState } from "react";
import CartItem from "../Container/CartItem";
import { connect } from "react-redux";

function Cart(props) {
  const [totalItem, setTotalItem] = useState(0);

  useEffect(() => {
    let total = 0;

    for (let i = 0; i < props.cart.length; i++) {
      let price = props.cart[i].price;
      total += price;
    }
    setTotalItem(total);
  }, [props.cart]);
  return (
    <>
      <div className="mx-auto pt-14 max-w-7xl px-2 lg:px-0">
        <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
          <h1 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Shopping Cart
          </h1>
          <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
            <section
              aria-labelledby="cart-heading"
              className="rounded-lg lg:col-span-8"
            >
              <h2 id="cart-heading" className="sr-only">
                Items in your shopping cart
              </h2>
              {props.cart.length === 0 ? (
                <h1 className="text-4xl text-center font-semibold text-gray-600">
                  No Product Available
                </h1>
              ) : (
                <CartItem />
              )}
            </section>
            {/* Order summary */}
            <section
              aria-labelledby="summary-heading"
              className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0"
            >
              <h2
                id="summary-heading"
                className=" border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4"
              >
                Price Details
              </h2>
              <div>
                <dl className=" space-y-1 px-2 py-4">
                  <div className="flex items-center justify-between">
                    <dt className="text-sm text-gray-800">
                      Price ({props.cart.length} item)
                    </dt>
                    <dd className="text-sm font-medium text-gray-900">
                      ₹ {totalItem}
                    </dd>
                  </div>

                  <div className="flex items-center justify-between py-4">
                    <dt className="flex text-sm text-gray-800">
                      <span>Delivery Charges</span>
                    </dt>
                    <dd className="text-sm font-medium text-green-700">Free</dd>
                  </div>
                  <div className="flex items-center justify-between border-y border-dashed py-4 ">
                    <dt className="text-base font-medium text-gray-900">
                      Total Amount
                    </dt>
                    <dd className="text-base font-medium text-gray-900">
                      ₹ {totalItem}
                    </dd>
                  
                  </div>
                  <button
                      type="button"
                      className="text-white flex items-center justify-center gap-3 w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      <ion-icon name="cash-outline"></ion-icon>
                      Checkout Now
                    </button>
                </dl>
              </div>
            </section>
          </form>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cartProduct.cart,
  };
};

export default connect(mapStateToProps)(Cart);
