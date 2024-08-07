import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

  return (
    <>
      <div className="fixed top-0 w-full bg-white z-10 shadow-xl">
        <div className="mx-auto flex max-w-8xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2">
            <Link to={"/"}>
              <span className="font-bold text-3xl flex items-center gap-1">
                {" "}
                <ion-icon name="bag-handle-outline"></ion-icon> Store
              </span>{" "}
            </Link>
          </div>

          <div className="flex items-center justify-around gap-52">

          
          <div className="hidden lg:block">
            <ul className="inline-flex space-x-8">
              <li>
                <Link
                  to={"/"}
                  className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  About
                </Link>
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
              <Link to={"wishlist"}>
                <button
                  type="button"
                  className="rounded-md bg-black px-4 py-1 text-2xl font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  <ion-icon name="heart"></ion-icon><sup> {wishlistProduct.length} </sup>
                </button>
              </Link>

              <Link to={"cart"}>
                <button
                  type="button"
                  className="mx-2 rounded-md bg-black px-4 py-1 text-2xl font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  <ion-icon name="cart-outline"></ion-icon><sup> {cartProducts.length}</sup>
                </button>
              </Link>

              <Link to={"/login"}>
                <button
                  type="button"
                  className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Log In
                </button>
              </Link>
            </div>
          </div>

          </div>
        </div>
      </div>
    </>
  );
}
