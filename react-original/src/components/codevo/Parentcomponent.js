import React, { Component } from 'react'
import Childcomponent from './Childcomponent'

class Parentcomponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentname: "parent"
      }
      this.greetparent = this.greetparent.bind(this)
    }

    greetparent(childName){
        alert(`hello ${this.state.parentname} from ${ childName}`)
    }
  render() {
    return (
      <div>
      <Childcomponent greetHandler={this.greetparent}></Childcomponent>
      </div>
    )
  }
}

export default Parentcomponent