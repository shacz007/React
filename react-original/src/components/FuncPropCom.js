import React from "react";

function FuncPropCom(props){
    return (
        <div>
            <h1> this is FUNCTION 1</h1>
            <pre>{JSON.stringify(props)}</pre>
            <h3>{props.name}</h3>
        </div>
    )
}

export default FuncPropCom;