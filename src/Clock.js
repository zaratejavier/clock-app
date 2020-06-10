import React from "react"


class Clock extends React.Component{
  state ={
    date: new Date()
  }

 tick =() => this.setState({date: new Date()})

  componentDidMount(){
  this.ticker= setInterval(() => this.tick(), 1000)

    console.log("mounted")

  }

  componentDidUpdate(){
    console.log("updated")
  }

  componentWillUnmount(){
    clearInterval(this.ticker)
    console.log('unmounting')
  }

  render(){
    // console.log(redner)
    return(
      <p>
        {this.state.date.toLocaleTimeString()}
      </p>
    )
  }
}

export default Clock;