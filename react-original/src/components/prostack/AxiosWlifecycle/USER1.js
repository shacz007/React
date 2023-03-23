import React, { Component } from 'react'
import axios from 'axios'

class USER1 extends Component {
    constructor(props){
        super(props)
        this.state ={
            users:[]
        }
    }
    getData = ()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
    }
  render() {
    return (
      <div></div>
    )
  }
}

export default USER1