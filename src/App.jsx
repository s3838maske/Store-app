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
const Home = lazy(() => import("./Pages/Home.jsx"));
const ItemDetails = lazy(() => import("./Pages/ItemDetails.jsx"));

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLogin: false,
      currentUser: "",
    };

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
                checkUserFunction={this.handleAuthentication}
              />
            }
          >
            <Route
              index
              element={
                <ErrorBoundary>
                  <Home isLogin={this.state.isLogin} />
                </ErrorBoundary>
              }
            />
            <Route
              path="cart"
              element={
                <ErrorBoundary>
                  <Cart />
                </ErrorBoundary>
              }
            />
            <Route
              path="wishlist"
              element={
                <ErrorBoundary>
                  <Wishlist />
                </ErrorBoundary>
              }
            />
            <Route path="ProductDetail/:id" element={<ItemDetails />} />
            <Route
              path="login"
              element={
                <Private>
                  <ErrorBoundary>
                    <SignIn
                      isLogin={this.state.isLogin}
                      checkUserFunction={this.handleAuthentication}
                      userAuthApi={this.userAuthApi}
                    />
                  </ErrorBoundary>
                </Private>
              }
            />
            <Route
              path="signup"
              element={
                <Private>
                  <ErrorBoundary>
                    <SignUp />
                  </ErrorBoundary>
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
