import React from 'react';

export default class ClockComponent extends React.PureComponent{
    state = {actualDate: new Date(), description:"a clock"}

    componentDidMount(){
        setInterval(() => this.setState({actualDate: new Date()}), 1000)
    }
    render(){
        return (
    <p>{this.state.description} {this.state.actualDate.toLocaleTimeString()}</p>
        )
    }
}