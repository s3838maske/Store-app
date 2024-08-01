import React from "react";
import { Link } from "react-router-dom";

export default class SignUp extends React.Component{
    constructor(){
        super();
    }
        render(){
            return(
                <>
                <div className="login-form">
                    <div className="login-heading">
                        <h1>SignUp</h1>
                    </div>
                    <div className="input-box">
                        <ion-icon name="mail-outline"></ion-icon>
                        <input type="text" name="name" id="name" placeholder="Enter Name" />
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
                        <br /><br />
                        <hr />
                        <Link to={"/login"}><button type="submit">Login</button></Link>
                    </div>
                </div>
                </>
            );
        }
}