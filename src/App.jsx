import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Product from "./Pages/ProductList";
import Wishlist from "./Pages/WishList";
import Cart from "./Pages/Cart";
import Layout from "./Layouts/Layout.jsx";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      cartProducts: [],
      wishlistItems: [],
    };
    this.cart = [];
    this.wishList = [];

    this.addToWishlist = this.addToWishlist.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(id, name, imgSrc, price, desc) {
    
    let isItemInCart = false

    this.cart.forEach((items)=>{
       if( items.id === id){
      isItemInCart = true;
       }
    });
    
    if (!isItemInCart) {
      this.cart.push({
        id: id,
        title: name,
        price: price,
        imageSrc: imgSrc,
        desc: desc,
      });

      this.setState({ cartProducts: this.cart });
      successModalShow()
      console.log("Item added to cart:", this.cart);
    } else {
      console.log("Item already in cart.");
    }
  }

  
  addToWishlist(id, name, imgSrc, price, desc) {
    let isItemInWish = false;

    this.wishList.forEach((value)=>{
      if(value.id === id){
          isItemInWish = true;
      }
    })

    if(!isItemInWish){

      this.wishList.push({
        id: id,
        title: name,
        price: price,
        imageSrc: imgSrc,
        desc: desc,
      });
      this.setState({ wishlistItems: this.wishList });
      successModalShow()
    }else{
      console.log("item already exist");
    }
    }
    
  render() {
    return (
      <>
        <Routes>
          <Route
            path="/"
            element={<Layout cart={this.cart} wishList={this.wishList} />}
          >
            <Route
              index
              element={
                <Product
                  cartFunc={this.addToCart}
                  wishFunc={this.addToWishlist}
                />
              }
            />
            <Route path="login" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route
              path="cart"
              element={<Cart cartProduct={this.state.cartProducts} />}
            />
            <Route
              path="wishlist"
              element={<Wishlist cartFunc={this.addToCart} wishlistProduct={this.state.wishlistItems} />}
            />
          </Route>
        </Routes>
      </>
    );
  }
}
