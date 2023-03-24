import React, { Component } from "react";

class Normal extends Component{
    constructor(){
        super();
        this.state ={
            message : "hello"
        }
    }
    gmHandler = () => {
        this.setState ({
            message : "Good morning "
        })
    }

    gnHandler =() => {
        this.setState ({
            message: "Goodnight"
        })
    }
    hiHandler = ()=>{
        this.setState({
            message: "how may i help you"
        })
    }
    render(){
        // you cannot define function too each button, the code will become big
        // so we have to use bind and pass message through while clicking
        return(
            <div>
                <div>
                    <h1>{this.state.message}</h1>
                </div>
                <button onClick={this.gmHandler}>GM</button>
                <button onClick={this.gnHandler}>GN</button>
                <br/>
                <button onClick={this.hiHandler}>HI</button>
            </div>
            
        )
    }
}
export default Normal