import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "./Store/index.js";
import Loading from "./Components/common/Loading.jsx";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";


let persist = persistStore(store) 

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
      {/* <PersistGate persistor={persist}> */}
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
      {/* </PersistGate> */}
    </Provider>

    <ToastContainer />
  </BrowserRouter>

);
