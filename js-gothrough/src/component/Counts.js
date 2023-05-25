import React, { Component } from 'react'

export default class counts extends Component {

  //updating
componentDidUpdate(prevprops,prevState){
  // console.log(prevprops.number);
  // console.log(this.props.number)
  if (prevprops.number !== this.props.number) {
    console.log("component updated");
  }
}

  render() {
    return (
      <div>
        <h1>{this.props.number}</h1>
      </div>
    )
  }
}
