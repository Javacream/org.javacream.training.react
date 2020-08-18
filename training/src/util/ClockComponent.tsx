import React from 'react'

export default class ClockComponent extends React.PureComponent{
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