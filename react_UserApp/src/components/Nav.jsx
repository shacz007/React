import React from "react";
import { Link } from "react-router-dom";

function Nav(){
    return <div>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link className="navbar-brand" to="#">USER APP</Link>
                <div className="ml-auto">
                    <ul className="navbar-nav">
                    <li className="nav-list"><Link className="nav-link" to="index">HOME</Link></li>
                    <li className="nav-list"><Link className="nav-link" to="user">USER</Link></li>
                    </ul>
                </div>
        </nav>
    </div>
}
export default Nav