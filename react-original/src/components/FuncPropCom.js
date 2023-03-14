import React from "react";
import ClassPROP from "./ClassPROP";

function FuncPropCom(props){
    return (
        <div>
            <h1> this is FUNCTION 1</h1>
            <pre>{JSON.stringify(props)}</pre>
            <h3>{props.prop}</h3>
            <hr/>
             <ClassPROP name={props.image} />

        </div>
    )
}

export default FuncPropCom;