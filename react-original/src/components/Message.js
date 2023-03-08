import React, { Component } from "react";

class Message extends Component {
    constructor(){

        super()
        this.state = {
            message: 'Welcome visitor'
        }
    }
    changeText(){
        this.setState({
            message: 'thanks for subscribing'
        })
    }
    render(){
        return (<div>
            <h1>{this.state.message}</h1>
            <button onClick={()=>{this.changeText() }}>SUBMIT</button>
        </div>)
    }
}
export default Message