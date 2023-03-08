import React from "react";

let Greet = (props)  => {
    return  ( <div>
        <h1>Hello {props.name}  from {props.surname}</h1>
        {props.children}
    </div>)
}


export default Greet; 
