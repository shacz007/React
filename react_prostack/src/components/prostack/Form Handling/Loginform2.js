import React, { Component } from 'react'

class Loginform2 extends Component {
    constructor(props){
        super(props)
        this.state = {
            email : "",
            password : ""
        }
    }

    updateHandler = (event)=>{
        this.setState({
                [event.target.name]:event.target.value
        })
    }

    submitHandler = (event)=>{
        event.preventDefault()
    }

  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.state)}</pre>
        <React.Fragment>
            <h1>Login form</h1>
            <form onSubmit={this.submitHandler}>
            <div>
            <input type="email" placeholder="enter email id" name="email" onChange={this.updateHandler}/>
            </div>
            <div>
            <input type="password" placeholder="enter password" name="password" onChange={this.updateHandler}/>
            </div>
            <button>Submit</button>
            </form>
        </React.Fragment>
      </div>
    )
  }
}

export default Loginform2