import { Component } from "react";

class WithBind extends Component{
   /*  constructor(){
        super()
        this.state=({
            messsage : "Hello welcome"
        })
    } */
    state = {
        message :"hello"
    }
    EventHandler=(value)=>{
        this.setState({
            message : value
        })
    }
    render(){
        return(
            <div>
                <pre>{JSON.stringify(this.state)}</pre>
                <h1>{this.state.message}</h1>
                <button onClick={this.EventHandler.bind(this,"GOOD morning")}>Gm</button>
                <button onClick={this.EventHandler.bind(this,"HOw may i help you?")}>Nedd help?</button>
                <button onClick={this.EventHandler.bind(this,"GOOD night brovva")}>GN</button>
            </div>
        )
    }
}
export default WithBind