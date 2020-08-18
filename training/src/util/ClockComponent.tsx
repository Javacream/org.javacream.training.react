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

export function HookClockComponent(){
    const [clock, updateClock] = useState(new Date())
//        setTimeout(() => {
//            let newTime = new Date()
//            updateClock(newTime); console.log(clock.toUTCString());
//        }, 1000)
    return (<div>{clock.toLocaleString()}</div>)
}
