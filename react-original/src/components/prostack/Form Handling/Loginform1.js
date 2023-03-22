import React, { Component } from 'react'

class Loginform extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
  render() {
    return (
      <div>
            <React.Fragment>
              <h2>Login details</h2>
              <form>
                <label>Email</label>
                <input  placeholder="ENTER email" type="text" onChange={this.emailHandler} />
                <label>password</label>
                <input  placeholder="ENTER email" type="password" onChange={this.passwordHandler} />
              </form>
            </React.Fragment>
      </div>
    )
  }
}

export default Loginform