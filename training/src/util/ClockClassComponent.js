import {Component} from 'react'

export default class ClockClassComponent extends Component{
    state = {time: new Date()}

    componentDidMount(){
        this.intervalId = setInterval(() => this.setState({time: new Date()}), 1000)
    }
    componentWillUnmount(){
        clearInterval(this.intervalId)
    }
    render(){
        return (
            <>
            <p>Class: {this.state.time.toUTCString()}</p>
            </>
        )
    }
}