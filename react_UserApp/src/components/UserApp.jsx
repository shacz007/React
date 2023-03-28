import React, { Component } from 'react'
import axios from 'axios'
import UserList from './UserList'
import UserDetails from './UserDetails'


class UserApp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       user : {}
    }
  }
    componentDidMount() {
      axios.get('https://dummyjson.com/users')
      .then((resp) => {
        this.setState({ user : resp.data })
      })
      .catch()
    }
  
  render() {
    return (
      <div>
        <h3>USER APP</h3>
        <div>
          <pre>{JSON.stringify(this.state.user)}</pre>
          <div>
            {
              Object.keys(this.state.user).length > 0 ? <>
              <UserList users={this.state.user.users} /></>: null
            }
          </div>
          <div>
            <UserDetails></UserDetails>
          </div>
        </div>
      </div>
    )
  }
}

export default UserApp