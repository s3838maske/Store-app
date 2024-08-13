import React from "react";
import { toast } from "react-toastify";
import { Navigate, Route, Routes } from "react-router-dom";
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
      isLogin: true,
    };
    this.cart = [];
    this.wishList = [];

    this.addToWishlist = this.addToWishlist.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  handleUser() {
    this.setState({ isLogin: false });
  }

  addToCart(id, name, imgSrc, price, desc) {
    let isItemInCart = false;

    this.cart.forEach((items) => {
      if (items.id === id) {
        isItemInCart = true;
      }
    });

    if (this.state.isLogin) {
      if (!isItemInCart) {
        this.cart.push({
          id: id,
          title: name,
          price: price,
          imageSrc: imgSrc,
          desc: desc,
        });

        this.setState({ cartProducts: this.cart });
        toast.success("Added To Cart Successfully !!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        toast.info("Product already exist", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } else {
      // this.handleUserNavigate()
      window.location.href = "/login";
    }
  }

  addToWishlist(id, name, imgSrc, price, desc) {
    let isItemInWish = false;

    this.wishList.forEach((value) => {
      if (value.id === id) {
        isItemInWish = true;
      }
    });

    if (this.state.isLogin) {
      if (!isItemInWish) {
        this.wishList.push({
          id: id,
          title: name,
          price: price,
          imageSrc: imgSrc,
          desc: desc,
        });
        this.setState({ wishlistItems: this.wishList });
        toast.success("Added To Wishlist Successfully !!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        toast.info("Product already exist", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } else {
      // this.handleUserNavigate()
      window.location.href = "/login";
    }
  }

  render() {
    return (
      <>
        <Routes>
          <Route
            path="/"
            element={
              <Layout
                isLogin={this.state.isLogin}
                cart={this.cart}
                wishList={this.wishList}
              />
            }
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
              element={
                <Wishlist
                  cartFunc={this.addToCart}
                  wishlistProduct={this.state.wishlistItems}
                />
              }
            />
          </Route>
        </Routes>
      </>
    );
  }
}
