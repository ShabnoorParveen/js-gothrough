import './App.css';
import React, { Component } from 'react'
import Counter from './component/Counts'
// import Counter from "../src/component/Counter";

//lifecycle example
// mountiong------> updating--------> unmounting
//use case-> button then click and value increment 

export default class App extends Component {

  //initializing befor load
  constructor(){
    super();//to get component class constructor here
  this.state={
    count: 0
  }
  }

  componentDidMount(){
    console.log("componentDidMount: when render 1st time" )
  }

//user define func
increment(){
  this.setState({count: this.state.count+1})
}

  render() {//lifecycle method--> to make understand to browser with help of transfile like babel it does not understand jsx
    return (
      <div className='App'>
        {/* <h1>{this.state.count}</h1> */}
        <Counter />
        {/* <button className='btn' onClick={this.increment.bind(this)}>Click me</button> */} 
        {/* .bind is used before ES6 but same can be done with an arrow function*/}
        <button className='btn' onClick={()=>{this.increment()}}>Click me</button>
      </div>
    )
  }
}

 