import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "./Store/index.js";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      transition:Bounce
    />
  <Provider store={store}>

    <App />
  </Provider>
    
    <ToastContainer />
  </BrowserRouter>
);
