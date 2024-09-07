import { Navigate } from "react-router-dom";
import React, { Component } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Register from "../Container/Regis";
import Loading from "../Components/common/Loading";

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      avatar: "https://picsum.photos/800",
      navigate: false,
      loading : false,
    };

    this.debounceTimer = null
  }

  handleUser = (e) => {
    const { name, value } = e.target;
    this.setState({[name]: value,});
  };   

  handleNavigate = () => {
    this.setState({ navigate: true });
  };

  
 
  handleValidation = () => {
   
    const { email, password, name } = this.state;

    // Basic validation checks
    if (!name) {
      toast.error("Name is required", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    if (!email) {
      toast.error("Enter a valid email", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    if (!password) {
      toast.error("Password is required", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    clearTimeout(this.debounceTimer);

    this.debounceTimer = setTimeout(() => {
      this.createUserApi();
    }, 2000);
  };


  createUserApi = () => {
    this.setState({loading:true})
    axios
      .post("https://api.escuelajs.co/api/v1/users/", {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        avatar: "https://picsum.photos/800",
      })
      .then((Response) => {
        console.log(Response.data);

        toast.success("Account Created Successfully !!", {
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
        this.setState({loading:false})
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
      return <Navigate to={"/login"} />;
    }
    return (
      <>
      {this.state.loading&&<Loading />}
       <Register handleUser={this.handleUser} handleValidation={this.handleValidation} />
      </>
    );
  }
}
