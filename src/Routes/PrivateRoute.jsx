import { Navigate } from "react-router-dom";

const Private = ({ children }) =>{
    if(localStorage.getItem("currentUserToken")){
        return <Navigate to={"/"}/>
    }
        return children
    
}

export default Private;