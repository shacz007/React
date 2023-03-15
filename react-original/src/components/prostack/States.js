import React, { Component } from "react";

class States extends Component{
    constructor(props){
        super(props);

        state ={
            msg: "Hellloi"
        }
    }
    render(){
        return <div>
            <h3>MESSAGE STATe COMPO</h3>
            <button onClick={this.HiHandler}>Click meeeeeeeeeeee</button>
        </div>
    }
}
export default States;;