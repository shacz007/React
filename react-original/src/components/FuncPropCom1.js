import React from "react";
import FuncPropCom from "./FuncPropCom";

function FuncPropCom1(){
    let name=  "magic" ;
    return (
        <div>
            <h1> this is FuncPropCom1</h1>
        <hr/>
            <FuncPropCom ename={name}/>
        </div>
    )
}
export default FuncPropCom1;
