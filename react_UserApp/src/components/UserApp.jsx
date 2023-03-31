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
      <div className='container'>
        <h3>USER APP</h3>
        <div className='row'>
          <pre>{JSON.stringify(this.state.user)}</pre>
          <div className='col-md-8'>
            {
              Object.keys(this.state.user).length > 0 ? <>
              <UserList users={this.state.user.users} /></>: null
            }
          </div>
          <div className='col-md-4'>
            <UserDetails></UserDetails>
          </div>
        </div>
      </div>
    )
  }
}

export default UserApp