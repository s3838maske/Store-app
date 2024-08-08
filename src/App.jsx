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
    this.state={
      cartCount : cartProducts.length
    }
    this.handleCartCount = this.handleCartCount.bind(this);
  }

  // this.getProducts =  this.getProducts.bind(this);


  // addCart(){
  //   let {count} = this.state

  //   this.setState({count : count + 1})
  //   console.log(this.state.count);
  // }

  handleCartCount(){
    let {count} = this.state

      this.setState({count : count + 1})
      // console.log(this.state.count);
  }

  render() {
    return (
      <>
      <Routes>
      <Route path="/" element={<Layout count={this.state.count}/>}>
        <Route index element={<Product countFunc={this.handleCartCount} />} />
        <Route path="login" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="cart" element={<Cart/>} />
        <Route path="wishlist" element={<Wishlist/>}/>
      </Route>
    </Routes>
    </>
    
    );
  }
}
