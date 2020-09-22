import React from 'react';
import {subscribe, unsubscribe} from 'pubsub-js'
import { runInThisContext } from 'vm';

export default class LogComponent extends React.PureComponent{
    state = {message: "nothing"}
    subscriptionId:string = ""
    componentDidMount(){
        this.subscriptionId = subscribe ("log", this.handleNotification)
    }
    componentWillUnmount(){
        unsubscribe(this.subscriptionId)
    }

    handleNotification = (topic:string, data:string) => {
        this.setState({message: data})
    }
    render(){
        return (
        <p>`Last action was: {this.state.message}`</p>
        )
    }
}
