import React from "react";
import { Link } from "react-router-dom";

function Nav(){
    return <div>
        <nav>
            <Link to="#">USER APP</Link>
                <div>
                    <li><Link to="index">HOME</Link></li>
                    <li><Link to="user">USER</Link></li>
                </div>
        </nav>
    </div>
}
export default Nav