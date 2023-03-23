import React, { Component } from 'react'
import axios from 'axios'


// DONE WITH BUTTON TO DISPLAY DATA ONCLICK

class USER1 extends Component {
    constructor(props){
        super(props)
        this.state ={
            users:[]
        }
    }
    getData = ()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((resp)=>{
            console.log(resp.data);
            this.setState({user : resp.data})
        })
        .catch((err)=>{
            console.log(err.data);
        })
    }
  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.state)}</pre>
        <button onClick={this.getData}>CLICK me</button>
      </div>
    )
  }
}

export default USER1