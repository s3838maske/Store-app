import React from "react";
import {Route, Routes } from "react-router-dom";
import SignIn from "./Pages/signIn";
import SignUp from "./Pages/signUp";
import Navbar from "./Container/navbar"
import Product from "./Pages/product";
import ProductDetail from "./Pages/productDetail";


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      login: true,
    };
  }

  render() {
    return (
        <Routes>
          <Route path="/login" element={!this.state.login ? <SignIn/> : <Navbar/>} />
          <Route path="/signup" element={ <SignUp /> } />
          <Route path="/productdetail" element={ <ProductDetail/>} />
          <Route path="/" element={ <Product/> } />
        </Routes>
    );
  }
}
