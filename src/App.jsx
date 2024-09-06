import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "./Pages/SignIn.jsx";
import SignUp from "./Pages/SignUp";
import Wishlist from "./Pages/WishList";
import Cart from "./Pages/Cart";
import Layout from "./Layouts/Layout.jsx";
import axios from "axios";
import NotFound from "./Pages/NotFound.jsx";
import Private from "./Routes/PrivateRoute.jsx";
import ErrorBoundary from "./Components/common/ErrorBoundary.jsx";
// import Home from "./Pages/Home.jsx";
// import ItemDetails from "./Pages/ItemDetails.jsx";
const Home = lazy(() => import("./Pages/Home.jsx"));
const ItemDetails = lazy(() => import("./Pages/ItemDetails.jsx"));

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // count: 0,
      // cartProducts: [],
      // wishlistItems: [],
      isLogin: false,
      currentUser: "",
    };
    // this.cart = [];
    // this.wishList = [];

    // this.addToWishlist = this.addToWishlist.bind(this);
    // this.addToCart = this.addToCart.bind(this);
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
    this.userAuthApi();
    // this.props.productApiAction();
  }

  // addToCart(id, name, imgSrc, price, desc) {
  //   let isItemInCart = false;

  //   this.cart.forEach((items) => {
  //     if (items.id === id) {
  //       isItemInCart = true;
  //     }
  //   });

  //   if (!isItemInCart) {
  //     this.cart.push({
  //       id: id,
  //       title: name,
  //       price: price,
  //       imageSrc: imgSrc,
  //       desc: desc,
  //     });

  //     this.setState({ cartProducts: this.cart });
  //     toast.success("Added To Cart Successfully !!", {
  //       position: "top-center",
  //       autoClose: 3000,
  //       hideProgressBar: false,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "colored",
  //     });
  //   } else {
  //     toast.info("Product already exist", {
  //       position: "top-center",
  //       autoClose: 3000,
  //       hideProgressBar: false,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "colored",
  //     });
  //   }
  // }

  // addToWishlist(id, name, imgSrc, price, desc) {
  //   let isItemInWish = false;

  //   this.wishList.forEach((value) => {
  //     if (value.id === id) {
  //       isItemInWish = true;
  //     }
  //   });

  //   if (!isItemInWish) {
  //     this.wishList.push({
  //       id: id,
  //       title: name,
  //       price: price,
  //       imageSrc: imgSrc,
  //       desc: desc,
  //     });
  //     this.setState({ wishlistItems: this.wishList });
  //     toast.success("Added To Wishlist Successfully !!", {
  //       position: "top-center",
  //       autoClose: 3000,
  //       hideProgressBar: false,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "colored",
  //     });
  //   } else {
  //     toast.info("Product already exist", {
  //       position: "top-center",
  //       autoClose: 3000,
  //       hideProgressBar: false,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "colored",
  //     });
  //   }
  // }

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
                // cart={this.cart}
                // wishList={this.wishList}
                checkUserFunction={this.handleAuthentication}
              />
            }
          >
            <Route
              index
              element={
                <ErrorBoundary>

                <Home
                  isLogin={this.state.isLogin}
                  // cartFunc={this.addToCart}
                  // wishFunc={this.addToWishlist}
                  />
                  </ErrorBoundary>
              }
            />
            <Route
              path="cart"
              element={
                <Cart
                // cartProduct={this.state.cartProducts}
                />
              }
            />
            <Route
              path="wishlist"
              element={
                <Wishlist
                // cartFunc={this.addToCart}
                // wishlistProduct={this.state.wishlistItems}
                />
              }
            />
            <Route path="ProductDetail/:id" element={<ItemDetails />} />
            <Route
              path="login"
              element={
                <Private>
                  <SignIn
                    isLogin={this.state.isLogin}
                    checkUserFunction={this.handleAuthentication}
                    userAuthApi={this.userAuthApi}
                  />
                </Private>
              }
            />
            <Route
              path="signup"
              element={
                <Private>
                  <SignUp />
                </Private>
              }
            />
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </>
    );
  }
}

export default App;
