import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate, NavLink, redirect } from "react-router-dom";
import LogoutModel from "./common/LogoutModel";
import Search from "./Search";


function Navbar(props) {
  const navigate = useNavigate()
  const [showModel, setShowModel] = useState(false);

  function logOut(){
    localStorage.removeItem("currentUserToken");
    props.checkUserFunction();
    setShowModel(false)
   navigate("login")
  }
  
  const closeModel = () => {
    setShowModel(false)
  }

  

  return (
    <>
    {showModel && <LogoutModel close={closeModel} logOut={logOut} />}
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
           
            <div className="hidden lg:block ">
              <div className="flex items-center">
                <Search />
                <NavLink to={"wishlist"}>
                  <button
                    type="button"
                    className="rounded-md bg-black px-4 py-1 text-2xl font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    <ion-icon name="heart"></ion-icon>
                    <sup>  {props.wishList.length} </sup>
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
                      onClick={()=>setShowModel(true)}
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
     cart : state.cartProduct.cart,
     wishList : state.wishList.wishListProduct
  };
};

export default connect(mapStateToProps)(Navbar);