import React from "react";
import {Route, Routes } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Product from "./Pages/ProductList";
import Wishlist from "./Pages/WishList";
import Cart from "./Pages/Cart";
import Layout from "./Layouts/Layout.jsx";


export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Product />} />
        <Route path="login" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="cart" element={<Cart/>} />
        <Route path="wishlist" element={<Wishlist/>}/>
      </Route>
    </Routes>
    
    );
  }
}
