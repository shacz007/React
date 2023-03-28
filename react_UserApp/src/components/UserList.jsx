import React, { Component } from 'react'

export class UserList extends Component {
  render() {
    return (
      <div>
        <h3>USeR LIST</h3>
        <div>
            <pre>{JSON.stringify(this.props)}</pre>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>EMAil</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.users.map((user) => {
                                return <tr key={user.id}>
                                  <td>{user.id}</td>
                                  <td>{user.firstName}</td>
                                  <td>{user.lastName}</td>
                                  <td>{user.email}</td>
                                </tr>
                              })
                        }
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    )
  }
}

export default UserList