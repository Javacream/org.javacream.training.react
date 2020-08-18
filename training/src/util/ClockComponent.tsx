import React, {useState} from 'react'

export class ClockComponent extends React.PureComponent{
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
    const [date, updateDate] = useState({actualDate: new Date()})
    //setInterval( () => {updateDate({actualDate: new Date()})}, 1000)
    return (
        <div>
            <p>{date.actualDate.toLocaleString()}</p>
        </div>
    )
}