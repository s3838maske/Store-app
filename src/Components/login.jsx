import React from "react";
// import Navbar from "./navbar";
import { Link } from "react-router-dom";

export default class Login extends React.Component{
    constructor(){
        super();
        this.state = {
            username: "",
            password: ""
        }
    }

     handleSubmit(){
        
     }


        render(){
            return(
                <>
                {/* <Navbar/> */}
                <div className="login-form">
                    <div className="login-heading">
                        <h1>Login</h1>
                    </div>
                    <div className="input-box">
                        <ion-icon name="mail-outline"></ion-icon>
                        <input type="text" name="email" id="email" placeholder="Enter Email" />
                    </div>
                    <div className="input-box">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="password" name="password" id="password" placeholder="Enter Password" />
                    </div>
                    <div className="submit-btn">
                        <button type="submit">Submit</button> 
                    <br />
                       <br />
                       <Link to={"/signup"}><button type="submit">Register</button></Link>
                    </div>
                </div>
                </>
            );
        }
}