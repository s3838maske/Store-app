import React from "react";
import { toast } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Product from "./Pages/ProductList";
import Wishlist from "./Pages/WishList";
import Cart from "./Pages/Cart";
import Layout from "./Layouts/Layout.jsx";
import axios from "axios";


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      cartProducts: [],
      wishlistItems: [],
      isLogin: false,
      currentUser: "",
    };
    this.cart = [];
    this.wishList = [];

    this.addToWishlist = this.addToWishlist.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.userAuthApi = this.userAuthApi.bind(this);
  }

  handleAuthentication() {
    if (!localStorage.getItem("currentUserToken")) {
      this.setState({ isLogin: false });
    } else {
      this.setState({ isLogin: true });
    }
  }

  componentDidMount() {
    this.handleAuthentication();
    this.userAuthApi()
  }


  addToCart(id, name, imgSrc, price, desc) {
    let isItemInCart = false;

    this.cart.forEach((items) => {
      if (items.id === id) {
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
  }

  addToWishlist(id, name, imgSrc, price, desc) {
    let isItemInWish = false;

    this.wishList.forEach((value) => {
      if (value.id === id) {
        isItemInWish = true;
      }
    });

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
  }

  async userAuthApi() {
    try {
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/auth/profile",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("currentUserToken")}`,
          },
        }
      );
      this.setState({ currentUser: response.data.name });
      console.log(this.state.currentUser);
    } catch (error) {
      console.log(error);
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
                currentUser={this.state.currentUser}
                isLogin={this.state.isLogin}
                cart={this.cart}
                wishList={this.wishList}
                checkUserFunction={this.handleAuthentication}
              />
            }
          >
            <Route
              index
              element={
                <Product
                  isLogin={this.state.isLogin}
                  cartFunc={this.addToCart}
                  wishFunc={this.addToWishlist}
                />
              }
            />
            <Route
              path="login"
              element={
                <SignIn
                isLogin={this.state.isLogin}
                  checkUserFunction={this.handleAuthentication}
                  userAuthApi={this.userAuthApi}
                />
              }
            />
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
