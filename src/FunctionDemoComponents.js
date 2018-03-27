import React, { Component } from 'react';
import {Link } from 'react-router-dom'


class FunctionDemoMainComponent extends Component {

  constructor(){
      super()
      this.message = "a message from FunctionDemoMainComponent"
      this.callback3 = this.callback3.bind(this)
    }
    callback1(){
      return this.message
    }
    callback2 = () => {
      return this.message
    }
    callback3(){
      return this.message
    }
    callback4 = function(){
      return this.message
    }

    render(){
  return (
          <div>
            <h3>FunctionDemoComponent</h3>
            <div><FunctionDemoComponent function1={this.callback1} function2={this.callback2} function3={this.callback3} function4={this.callback4} message="a message from FunctionDemoComponent"/></div>
          </div>
  )
}
}

const FunctionDemoComponent = (props) => {
    return (
      <div>
        <p>Callback1: {props.function1()}</p>
        <p>Callback2: {props.function2()}</p>
        <p>Callback3: {props.function3()}</p>
        <p>Callback4: {props.function4()}</p>
      </div>
    )
}
export {FunctionDemoMainComponent}
