import React from "react";
import {Route, Routes } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Product from "./Pages/product.jsx";
import Navbar from "./Layouts/Navbar"
import ProductDetail from "./Pages/ProductDetail";
import Wishlist from "./Pages/WishList";
import Cart from "./Pages/Cart";


export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Product />} />
        <Route path="login" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="productdetail" element={<ProductDetail />} />
        <Route path="cart" element={<Cart/>} />
        <Route path="wishlist" element={<Wishlist/>}/>
      </Route>
    </Routes>
    
    );
  }
}
