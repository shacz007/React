import React, { Component } from "react";
import FuncPropCom from "./FuncPropCom";

class ClassPROP extends Component{

    
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
