import {Component} from 'react'

export default class ClockClassComponent extends Component{
    state = {time: new Date()}
    componentDidMount(){
        this.interval = setInterval(()=>{this.setState({time: new Date()})})
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    render(){
        return (
            <>
                <p>{this.state.time.toUTCString()}</p>
            </>
        )
    }
}