import React from "react";

let Greet = (props)  => {
    // const {name,surname} = props
    // for above line to be applied remove props. from 7th line
    return  ( <div>
        <h1>Hello {props.name}  from {props.surname}</h1>
        {props.children}
    </div>)
}
export default Greet; 
