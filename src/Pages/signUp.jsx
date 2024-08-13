import { Link,Navigate } from 'react-router-dom'
import React, { Component } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'


export default class SignUp extends Component {
  constructor(){
    super()
    this.state ={
        name : "",
        email: "",
        password : "",
        avatar: "https://picsum.photos/800",
        navigate: false
    }
  }


  
  handleUser = (e)=>{
    const {name , value} = e.target;
    this.setState({
      [name] : value,
    })
  }

  
  handleNavigate = () => {
    this.setState({ navigate: true });
  }

  createUserApi=()=>{
    axios.post("https://api.escuelajs.co/api/v1/users/",{
      name : this.state.name,
      email: this.state.email,
      password : this.state.password,
      avatar: "https://picsum.photos/800",
    }).then(Response=> {console.log(Response.data)
      
      toast.success('Account Created Successfully !!',
        {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      this.handleNavigate()
    })
    .catch(Error => {
      console.log(Error)
      toast.error("Invalid Information", {   
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        })
    })
  }

  render() {
    
    if(this.state.navigate){
      return <Navigate to={'/login'}/>
    }
    return (
      
     <>
      <section>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md p-8 bg-white rounded-xl">
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
            Sign up to create account
          </h2>
          <p className="mt-2 text-center text-base text-gray-600">
            Already have an account?{' '}
            <Link to={"/login"}>
            <a
              href="#"
              title=""
              className="font-medium text-black transition-all duration-200 hover:underline"
              >
              Sign In
            </a>
                </Link>
          </p>
          <form action="#" method="POST" className="mt-8">
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="text-base font-medium text-gray-900">
                  {' '}
                  Full Name{' '}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Full Name"
                    name= "name"
                    id="name"
                    onChange={this.handleUser}
                  ></input>
                </div>
              </div>
              <div>
                <label htmlFor="email" className="text-base font-medium text-gray-900">
                  {' '}
                  Email address{' '}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="Email"
                    name= "email"
                    id="email"
                    onChange={this.handleUser}
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-base font-medium text-gray-900">
                    {' '}
                    Password{' '}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    placeholder="Password"
                    name= "password"
                    id="password"
                    onChange={this.handleUser}
                  ></input>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  onClick={this.createUserApi}
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  Create Account
                </button>
              </div>
            </div>
          </form>
         
        </div>
      </div>
    </section>
     </>
    )
  }
}
