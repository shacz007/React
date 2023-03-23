import axios from 'axios'
import React, { Component } from 'react'

 class USER2 extends Component {
    constructor(){
        super()
        this.state={
            user : []
        }
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/albums")
        .then((resp)=>{
            this.setState({
                user : resp.data
            })
        })
        .catch((err)=>{
            console.log(err);
        })
    }

  render() {
    return (
      <div>
            <pre>{JSON.stringify(this.state)}</pre>
            {
                this.state.user.length > 0 ? <>
                {
                    this.state.user.map((users)=>{
                        return <tr>
                            <td>{users.id}</td>
                            <td>{users.title}</td>
                        </tr>
                    })
                }
                </> : null
            }
      </div>
    )
  }
}

export default USER2