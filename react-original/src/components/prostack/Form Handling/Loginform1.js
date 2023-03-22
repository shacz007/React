import React, { Component } from 'react'

class Loginform extends Component {
    constructor(props){
        super(props)
        this.state = {
            email :"",
            password: ""
        }
    }

   emailHandler = (event)=>{
        this.setState({email : event.target.value})
    }

    passwordHandler = (event)=>{
      this.setState({password :event.target.value})
    }
    submitHandler = (event)=>{
      event.preventDefault();
    }
    
  render() {
    return (
      <div>
            <React.Fragment>
              <h2>Login details</h2>
              <pre>{JSON.stringify(this.state)}</pre>
              <form onSubmit={this.submitHandler}>
                <label>Email</label>
                <input  placeholder="ENTER email" type="email" onChange={this.emailHandler} />
                <label>password</label>
                <input  placeholder="ENTER email" type="password" onChange={this.passwordHandler} />
                <button>submit</button>
              </form>
            </React.Fragment>
      </div>
    )
  }
}

export default Loginform