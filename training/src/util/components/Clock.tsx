import React from 'react'

export default class Clock extends React.PureComponent{
    state = {actualTime: new Date()}

    componentDidMount(){
        console.log("mounting Clock")
        setInterval(() => {this.setState({actualTime: new Date()})}, 1000)
    }

    render(){
        return (
            <><p>{this.state.actualTime.toLocaleString()}</p>
            </>
        )
    }
}