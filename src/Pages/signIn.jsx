import axios from "axios";
import React from "react";
import {Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import Login from "../Container/Login";
import Loading from "../Components/common/Loading";
import {loginApi} from '../Constants/constant';


export default class SignIn extends React.Component {
  constructor(props) {
    super();
    this.state = {
      email: "",
      password: "",
      navigate: false,
      loading: false,
    };

    this.debounceTimer = null;

    this.handleValidation = this.handleValidation.bind(this);
  }

  handleUser = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleNavigate = () => {
    this.setState({ navigate: true });
  };

  handleValidation() {
    this.setState({ loading:true})
    const { email, password } = this.state;

  if (!email || !password) {
    this.setState({ loading:false})
      toast.error("Enter Valid Email & Password", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      clearTimeout(this.debounceTimer);

      this.debounceTimer = setTimeout(() => {
        this.userApi();
      }, 2000);
    }
    return;
  }

  userApi = () => {
   
    axios
      .post( loginApi, {
        email: this.state.email,
        password: this.state.password,
      })
      .then((Response) => {
        JSON.stringify(
          localStorage.setItem("currentUserToken", Response?.data.access_token)
        );
        this.setState({ loading:false})
        this.props?.checkUserFunction();
        this.props?.userAuthApi();
        toast.success("Successfully Login !!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        this.handleNavigate();
      })
      .catch((Error) => {
        this.setState({ loading:false})
        console.log(Error);
        toast.error(Error.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };

  render() {
    if (this.state.navigate) {
      return <Navigate to={"/"} />;
    }

    return (
      <>
      {this.state.loading && <Loading /> }
        <Login handleValidation={this.handleValidation} handleUser={this.handleUser} />
      </>
    );
  }
}
