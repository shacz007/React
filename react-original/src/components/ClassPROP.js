import React, { Component } from "react";
import FuncPropCom from "./FuncPropCom";

class ClassPROP extends Component{
    image="https://blinc-eu.org/wp-content/uploads/2020/09/blinc-neu-e1599820073821-300x288.png"
    render(){
        return(
            <div>
                <h1>ClassPropComp</h1>
                <FuncPropCom props={this.image}/>
            </div>
        )
    }
}
export default ClassPROP;
