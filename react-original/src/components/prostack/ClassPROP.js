import React, { Component } from "react";
// import FuncPropCom from "./FuncPropCom";

class ClassPROP extends Component{
    
    render(){
        return(
            <div>
                <h1>ClassPropComp</h1>
                {/* <FuncPropCom props={this.fullname}/> */}
                <pre>{JSON.stringify(this.props)}</pre>
                <h1>name {this.props.name}</h1>
                <h1>name {this.props.last}</h1>
            </div>
        )
    }
}
export default ClassPROP;
