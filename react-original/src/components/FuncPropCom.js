import React from "react";
import ClassPROP from "./prostack/ClassPROP";


function FuncPropCom(props){
let fullname = "cardamom";
let lastname = "clove";
    return (
        <div>
            <h1> this is FUNCTION 1</h1>
            <pre>{JSON.stringify(props)}</pre>
            <h3>{props.ename}</h3>
            <img src={props.img}></img>
            <hr/>
             <ClassPROP name={fullname} last={lastname}/>
             
             {/* <pre>{JSON.stringify(props)}</pre> */}

        </div>
    )
}

export default FuncPropCom;