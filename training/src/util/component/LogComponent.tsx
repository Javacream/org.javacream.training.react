import React, {Component} from 'react';
import {notification} from '../../ApplicationContext'

export default class LogComponent extends Component<{max: number}, {logs: Array<String>}>{
    subscription: number = 0;
    state = {logs: []}
    componentDidMount(){
        this.subscription = notification.subscribe("log", this.update)
    }
    componentWillUnmount(){
        notification.unsubscribe(this.subscription)
    }

    update = (topic: string, message:string) => {
        let messages:Array<String> = this.state.logs
        messages.push(message);
        const length = messages.length
        if (length > this.props.max)
            messages = [...messages].slice(1, length)
        this.setState({logs: messages})
    }
    render(){
        let logMessages = this.state.logs.map((m, index) => (
            <li key={index}>{m}</li>
        ))
        return (
            <div><ol>{logMessages}</ol></div>
        )
    }
}
