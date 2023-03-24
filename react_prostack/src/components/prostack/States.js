import React, { Component } from "react"

class States extends Component{
    constructor(props){
        super(props)

        this.state = {
            msg: "Hellloi"
        }
    }
    HiHandler = ()=>{
        this.setState({
            msg: "hiii!"
        })
    }
    GmHandler = () => {
        this.setState({
            msg: "Good night mariana"
        })
    }

    render() {
        return (<div>
            <h3>MESSAGE STATe COMPO</h3>
            <h1>message: {this.state.msg}</h1>
            <button onClick={this.HiHandler}>Click meeeeeeeeeeee</button>
            <br></br>
            <br></br>
            <button onClick={this.GmHandler}>GOODNIGHT</button>
        </div>)
    }
}
export default States