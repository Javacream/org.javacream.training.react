import {Component} from 'react'

export default class ClassClock extends Component{
    state = {time: new Date()}
    componentDidMount(){
        this.intervalId = setInterval(() => this.setState({time: new Date()}), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalId)
    }    
    render(){
        return (
        <><p>{this.state.time.toUTCString()}</p></>)
    }
}