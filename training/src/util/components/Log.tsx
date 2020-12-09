import { subscribe, unsubscribe } from 'pubsub-js'
import React from 'react'

export default class Log extends React.PureComponent{
    state = {lastAction: "", data:""}
    subscription = ""
    componentDidMount(){
        this.subscription = subscribe("people", this.handleNotification)
    }
    componentWillUnmount(){
        unsubscribe(this.subscription)
    }

    handleNotification = (message:string, data:any) => {
        this.setState({lastAction: message, data})
    }
    render(){
        return (
            <><p>{this.state.lastAction}:{this.state.data} </p>
            </>
        )
    }
}