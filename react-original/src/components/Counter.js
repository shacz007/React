import React, { Component } from "react";

class Counter extends Component{
    constructor(props){
        super(props)

        this.state = {
            count: 0

        }
    }

    increment(){
        // this.state.count = this.state.count + 1
        // do not modify the state directly use set state method

/* 
        this.setState({
             count: this.state.count +1
        },()=>{
            console.log('callbackValue', this.state.count);
        })

        console.log(this.state.count);
 */

        this.setState((CurrentState)=>({
            count: CurrentState.count +1
        }))
        console.log(this.state.count);
    }
    
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        //...works only when pass in function as a argument instead of object in the increment()
    }

    render(){
        return (
            <div>
                count - {this.state.count}
                <button onClick={()=>{this.incrementFive()}}>Click</button>
            </div>
        )
    }
}

export default Counter