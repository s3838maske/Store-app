import axios from 'axios'
import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'


export default class SignIn extends React.Component{

  constructor(props){
    super()
    this.state = {
      email : "",
      password : "",
      navigate: false
    }

    this.handleValidation = this.handleValidation.bind(this)
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


  handleValidation(){
    if(!this.state.email){
      toast.error("Enter Valid Email & Password" ,{   
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        })
    }else{
      setTimeout(()=>this.userApi(),5000)
    }
    return 
  }

  userApi =()=> {
    axios.post("https://api.escuelajs.co/api/v1/auth/login",
   {
   email : this.state.email,
   password : this.state.password
   }).then(Response => {
    JSON.stringify(localStorage.setItem("currentUserToken", Response?.data.access_token))
    this.props.checkUserFunction()
    this.props?.userAuthApi()
    toast.success('Successfully Login !!',
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
   .catch(Error=> {console.log(Error)
    toast.error(Error.message ,{   
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
      return <Navigate to={'/'}/>
    }

    return (
      <>
      <section>

          <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
            <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md bg-white p-7 rounded-xl shadow-2xl">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign in</h2>
              <p className="mt-2 text-sm text-gray-600">
                Don&apos;t have an account?{' '}
                <Link 
                className="font-semibold text-black transition-all duration-200 hover:underline"
                to={"/signUp"}>
                  Create a account 
                  </Link>
              </p>
              <form action="#" method="POST" className="mt-8">
                <div className="space-y-5">
                  <div>
                    <label htmlFor="" className="text-base font-medium text-gray-900">
                      {' '}
                      Email address{' '}
                    </label>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="email"
                        name= "email"
                        onChange={this.handleUser}
                        placeholder="Email"
                        required
                      ></input>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="" className="text-base font-medium text-gray-900">
                        {' '}
                        Password{' '}
                      </label>
                      <p
                        href="#"
                        title=""
                        className="text-sm font-semibold text-black hover:underline"
                      >
                        {' '}
                        Forgot password?{' '}
                      </p>
                    </div>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="password"
                        name='password'
                        onChange={this.handleUser}
                        required
                        placeholder="Password"
                      ></input>
                    </div>
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={this.handleValidation}
                      className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                    >
                      Sign In
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
