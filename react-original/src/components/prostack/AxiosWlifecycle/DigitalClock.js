import React, { Component } from 'react'

export class DigitalClock extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         currentTime : new Date().toLocaleTimeString()
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                currentTime : new Date().toLocaleTimeString()
            })
    },1000)
}
  render() {
    return (
      <div>
        <h1 style={{fontsize : 50}}>DigitalClock</h1>
        <h1 style={{fontSize: 300, color: 'Limegreen'}}>{this.state.currentTime}</h1>
        </div>
    )
  }
}

export default DigitalClock