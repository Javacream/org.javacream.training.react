import {Component} from 'react'

export default class ClockClassComponent extends Component{
    state = {time: new Date()}

    constructor(){
        super()
        setInterval(() => this.setState({time: new Date()}), 990)
    }

    render(){
        return  (<>
        <p>{this.state.time.toUTCString()}</p>
      </>)
    }
}