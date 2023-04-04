import React from "react";
import { Link } from "react-router-dom";

const NAV = ()=>{
    return <nav>
       
        <Link to="#">
            Logo
        </Link>
 
        <div>
            <hr></hr>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
                <li>Login</li>
            </ul>
            <hr></hr>
        </div>
    </nav>
}

export default NAV
