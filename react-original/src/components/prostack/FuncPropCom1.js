import React from "react";
import FuncPropCom from "../FuncPropCom";

function FuncPropCom1(){
    let name=  "magic" ;
    let image = "https://da28ojrjakn6f.cloudfront.net/tickets/4355/NEW/img_1650272397_1650273497__1.jpg?v=1.1.0"
    return (
        <div>
            <h1> this is FuncPropCom1</h1>
            <img src={image}/>
        <hr/>
            <FuncPropCom ename={name}/>
            <FuncPropCom img={image}/>
        </div>
    )
}
export default FuncPropCom1;
