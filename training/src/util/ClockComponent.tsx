import React, {useState} from 'react'


export class ClockComponent extends React.PureComponent<{}, {actualDate:Date}>{
    state = {actualDate: new Date()}
    componentDidMount(){
        setInterval( () => {this.setState({actualDate: new Date()})}, 1000)
    }
    render(){
        return  (
            <div>
                <p>{this.state.actualDate.toLocaleString()}</p>
            </div>
        )
    }
}

let first = true
export function HookClockComponent(){
    const [clock, updateClock] = useState({time: new Date()})
    if(first){
        setInterval(() => {
            updateClock({time: new Date()})
        }, 1000)
        first = false
    }
    return (<div>{clock.time.toUTCString()}</div>)
}
