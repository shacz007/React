import React, { Component } from "react";

class Usergreeting extends Component{
    constructor(){
        super()

        this.state = {
            isLoggeedIn : false
        }
    }
    render(){
        // shortcircuit operator

        return this.state.isLoggeedIn && <h1>welome sachin</h1>


        /* // using ternary operator
            return (
                this.state.isLoggeedIn? (<h1>welcome sachin</h1>):
                (<h1>welcome guest</h1>)
            ) */

            
        /* // using element variables
        let message;
        if(this.state.isLoggeedIn){
            message=<h1>welcome sachin</h1>
        } else{
            message=<h1>welcome guest</h1>
        }
        return message; */


        /* // using if/else condition
        if(this.state.isLoggeedIn){
            return <div>
                <h1>welcome sachin</h1>
            </div>
        }else{
            return <div>
            <h1>welcome guest</h1>
        </div>
        } */
        // return(
        //     <div>
        //         <h1>HEllo sachin</h1>
        //         <h1>Welcome guest</h1>
        //         </div>

        // )
    }
}
export default Usergreeting