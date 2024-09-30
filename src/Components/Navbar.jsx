import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import LogoutModel from "./common/LogoutModel";
import {
  sagaCategoryAction,
  sagaProductList,
} from "../Store/Products/productAction";

import Search from "../Container/Search";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const categories = [
  { id: 1, name: "Cloths" },
  { id: 2, name: "Electronics" },
  { id: 3, name: "Furniture" },
  { id: 4, name: "Shoes" },
  { id: 5, name: "Miscellaneous" },
];

function Navbar(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showModel, setShowModel] = useState(false);

  const cart = useSelector((state) => state.cartProduct.cart);
  const wishList = useSelector((state) => state.wishList.wishListProduct);

  function logOut() {
    localStorage.removeItem("currentUserToken");
    props.checkUserFunction();
    setShowModel(false);
    navigate("login");
  }

  const closeModel = () => {
    setShowModel(false);
  };

  return (
    <>
      {showModel && <LogoutModel close={closeModel} logOut={logOut} />}
      <Disclosure as="nav" className=" fixed z-50 top-0 w-full bg-gray-800">
        <div className=" mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block h-6 w-6 group-data-[open]:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden h-6 w-6 group-data-[open]:block"
                />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-around	 sm:items-stretch sm:justify-between">
              <div className="flex flex-shrink-0 items-center">
                <NavLink to={"/"}>
                  <span className="text-white font-bold text-3xl flex items-center gap-1">
                    {" "}
                    <ion-icon name="bag-handle-outline"></ion-icon> Store
                  </span>{" "}
                </NavLink>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4 items-center">
                  <Search />
                  <NavLink to={"wishlist"}>
                    <button
                      type="button"
                      className="rounded-md px-4 py-1 text-2xl font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <ion-icon name="heart"></ion-icon>
                      <sup> {wishList.length} </sup>
                    </button>
                  </NavLink>
                  <NavLink to={"cart"}>
                    <button
                      type="button"
                      className="mx-2 rounded-md px-4 py-1 text-2xl font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <ion-icon name="cart-outline"></ion-icon>
                      <sup> {cart.length} </sup>
                    </button>
                  </NavLink>

                  {!props.auth ? (
                    <NavLink to={"/login"}>
                      <button
                        type="button"
                        className="rounded-md border border-white px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        Log In
                      </button>
                    </NavLink>
                  ) : (
                    <>
                      <div className="mx-2 text-lg text-white font-bold">
                        👋Welcome, {props.currentUserName}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {props.auth && (
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        className="h-8 w-8 rounded-full"
                      />
                    </MenuButton>
                  </div>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                      >
                        Your Profile
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                      >
                        Settings
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#"
                        onClick={() => setShowModel(true)}
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                      >
                        Sign out
                      </a>
                    </MenuItem>
                  </MenuItems>
                </Menu>
              )}
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            
            <ul className="pl-6">
              
              <NavLink to={"cart"}>
              <button
                type="button"
                className="text-gray-300 hover:bg-gray-700 hover:text-whiteblock rounded-md px-3 py-2 text-base font-medium flex items-center gap-2"
              >
                Cart
                <ion-icon name="cart-outline"></ion-icon>
                <sup> {cart.length} </sup>
              </button>
            </NavLink>
            <NavLink to={"wishlist"}>
              <button
                type="button"
                className="text-gray-300 hover:bg-gray-700 hover:text-whiteblock rounded-md px-3 py-2 text-base font-medium flex items-center gap-2"
              >
                Wishlist
                <ion-icon name="heart"></ion-icon>
                <sup> {wishList.length} </sup>
              </button>
            </NavLink>
           
            {!props.auth && (
              <NavLink to={"/login"}>
                <button
                  type="button"
                  className="text-gray-300 hover:bg-gray-700 hover:text-whiteblock rounded-md px-3 py-2 text-base font-medium flex items-center gap-2"
                >
                  Log In
                </button>
              </NavLink>
            )}
            <li
                key="AllProduct"
                className="py-4 cursor-pointer"
                onClick={() => dispatch(sagaProductList())}
              >
                <a className="text-gray-300 hover:bg-gray-700 hover:text-whiteblock rounded-md px-3 py-2 text-base font-medium flex items-center gap-2">All</a>
              </li>
              {categories.map((category) => (
                <li
                  key={category.id}
                  className="py-4 cursor-pointer"
                  onClick={() => dispatch(sagaCategoryAction(category.id))}
                >
                  <a className="text-gray-300 hover:bg-gray-700 hover:text-whiteblock rounded-md px-3 py-2 text-base font-medium flex items-center gap-2">
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </DisclosurePanel>
      </Disclosure>
    </>
  );
}

export default Navbar;
