import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

function Navbar(props) {
  function logout() {
    localStorage.removeItem("currentUserToken");
    props.checkUserFunction();
  }

  return (
    <>
      <div className="fixed top-0 w-full bg-white z-10 shadow-xl">
        <div className="mx-auto flex max-w-8xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2">
            <NavLink to={"/"}>
              <span className="font-bold text-3xl flex items-center gap-1">
                {" "}
                <ion-icon name="bag-handle-outline"></ion-icon> Store
              </span>{" "}
            </NavLink>
          </div>

          <div className="flex items-center justify-around">
            <div className="hidden lg:block">
              <ul className="inline-flex space-x-8">
                <li>
                  <NavLink
                    to={"/"}
                    style={({ isActive, isPending, isTransitioning }) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                        color: isPending ? "red" : "black",
                        viewTransitionName: isTransitioning ? "slide" : "",
                      };
                    }}
                    className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/about"}
                    style={({ isActive, isPending, isTransitioning }) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                        color: isPending ? "red" : "black",
                        viewTransitionName: isTransitioning ? "slide" : "",
                      };
                    }}
                    className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                  >
                    About
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="hidden lg:block ">
              <div className="flex items-center">
                <div className="flex grow justify-center">
                  <input
                    className="flex h-10 w-[250px] mx-3 rounded-md bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Serach"
                  ></input>
                </div>
                <NavLink to={"wishlist"}>
                  <button
                    type="button"
                    className="rounded-md bg-black px-4 py-1 text-2xl font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    <ion-icon name="heart"></ion-icon>
                    <sup> {props.wishlistCount.length} </sup>
                  </button>
                </NavLink>

                <NavLink to={"cart"}>
                  <button
                    type="button"
                    className="mx-2 rounded-md bg-black px-4 py-1 text-2xl font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    <ion-icon name="cart-outline"></ion-icon>
                    <sup> {props.cart.length} </sup>
                  </button>
                </NavLink>

                {!props.auth ? (
                  <NavLink to={"/login"}>
                    <button
                      type="button"
                      className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Log In
                    </button>
                  </NavLink>
                ) : (
                  <>
                    <div className="mx-2 text-lg text-blue-900 font-bold">
                     👋Welcome, {props.currentUserName}
                    </div>
                    <button
                      type="button"
                      onClick={logout}
                      className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Log Out
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



const mapStateToProps = (state) => {
  return {
     cart : state.cartProduct.cart
  };
};

export default connect(mapStateToProps)(Navbar);