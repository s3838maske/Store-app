import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

export default function navbar(){

  return(
    <>
  <div className="relative w-full bg-white">
  <div className="mx-auto flex max-w-8xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
    <div className="inline-flex items-center space-x-2">
      <span className="font-bold text-3xl flex items-center gap-1"> <ion-icon name="bag-handle-outline"></ion-icon> Store</span>
    </div>
    <div className="hidden lg:block">
      <ul className="inline-flex space-x-8">
        <li>
          <Link to={"/"}>
          <a
            href="#"
            className="text-sm font-semibold text-gray-800 hover:text-gray-900"
            >
            Home
          </a>
            </Link>
        </li>
        <li>
          <a
            href="#"
            className="text-sm font-semibold text-gray-800 hover:text-gray-900"
          >
            About
          </a>
        </li>
      </ul>
    </div>
    <div className="hidden lg:block ">
      <div className="flex">
      <button
        type="button"
        className="rounded-md bg-black px-4 py-1 text-2xl font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
        <ion-icon name="cart-outline"></ion-icon>
      </button>
     
     <Link to={"/login"}>
      <button
        type="button"
        className="rounded-md border mx-2 border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
        Log In
      </button>
      </Link>
        </div>
    </div>
  </div>
</div>

    </>
  )


}
