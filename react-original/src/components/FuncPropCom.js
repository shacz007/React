import React from "react";
import ClassPROP from "./ClassPROP";

function FuncPropCom(props){
    return (
        <div>
            <h1> this is FUNCTION 1</h1>
            {/* <pre>{JSON.stringify(props)}</pre> */}
            <h3>{props.ename}</h3>
            <hr/>
             <ClassPROP name={props.image} />
             <pre>{JSON.stringify(props)}</pre>

        </div>
    )
}

export default FuncPropCom;