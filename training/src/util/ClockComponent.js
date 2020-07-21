import React, { Component } from "react";

export default class ClockComponent extends Component{
    state = {time: new Date(Date.now())}

    render(){
        return (<div>Class Time: {this.state.time.toUTCString()}</div>)
    }
    componentDidMount() {
        setInterval(() => this.setState({time: new Date(Date.now())}), 1000)
    }
}