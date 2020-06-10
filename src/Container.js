import React from "react"

export default class Container extends React.Component{

  render(){
    return(
    <div style={{margin:'15px'}}>
        {this.props.children}
    </div>
 )}
}