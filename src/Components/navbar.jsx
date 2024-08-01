import React from "react";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar">
          <div className="logo">
            <ion-icon name="bag-handle-outline"></ion-icon>
            <span>Store App</span>
          </div>
          <div className="nav-list">
            <li><Link to={"/"} className="nav-link">Home</Link></li>
            <li className="nav-link">Product</li>
            <li className="nav-link">Cart</li>
            <li className="nav-link">Logout</li>
          </div>
        </nav>
      </>
    );
  }
}
