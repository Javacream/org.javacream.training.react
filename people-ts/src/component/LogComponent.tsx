import React, {PureComponent, Component} from 'react';
import {notificationBus} from '../ApplicationContext'
export class LogComponent extends Component<{}, {logs: Array<String>}>{
    subscription: number = 0;
    state = {logs: []}
    componentDidMount(){
        this.subscription = notificationBus.subscribe("log", this.update)
    }
    componentWillUnmount(){
        notificationBus.unsubscribe(this.subscription)
    }

    update = (topic: string, message:string) => {
        let messages:Array<String> = this.state.logs
        messages.push(message);
        this.setState({logs: messages})
    }
    render(){
        let logMessages = this.state.logs.map((m) => (
            <li>{m}</li>
        ))
        return (
            <div><ol>{logMessages}</ol></div>
        )
    }
}


