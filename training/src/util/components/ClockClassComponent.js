import {Component} from 'react'

export default class ClockClassComponent extends Component{
    static first = true
    state = {time: new Date()}
    componentDidMount(){
        if (ClockClassComponent.first){
            console.log("COMPONENT IS MOUNTED!")
            setInterval(() => {this.setState({time: new Date()}); console.log("ClassComponent: " + this.state.time)}, 5000)
            ClockClassComponent.first = false
        }
    }

    render(){
        return  (<>
        <p>{this.state.time.toUTCString()}</p>
      </>)
    }
}