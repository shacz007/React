import React,{Component} from "react";

class Eventbind extends Component{
    constructor(){
        super()

        this.state= { 
            message: 'Hello'
        }
        this.clickhandler = this.clickhandler.bind(this)
    }
    clickhandler(){
        this.setState({
            message: 'good byeeeeeeeeeeee'
        })
    }
    render(){
        return(
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickhandler.bind(this)}>click</button> */}
                {/* <button onClick={()=>{this.clickhandler()}}>click</button> */}
                <button onClick={this.clickhandler}>click</button>
            </div>
        )
    }
}

export default Eventbind