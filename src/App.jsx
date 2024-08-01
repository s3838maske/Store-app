import React from "react";
import Login from "./Components/login";
import Navbar from "./Components/navbar";
import {Route, Routes } from "react-router-dom";
import SignUp from "./Components/signUp";

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
          <Route path="/login" element={!this.state.login ? <Login />: <Navbar />} />
          <Route path="/" element={<Navbar />} />
          <Route path="/signup" element={<SignUp/>} />
        </Routes>
    );
  }
}
