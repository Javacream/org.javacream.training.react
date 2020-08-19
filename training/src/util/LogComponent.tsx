import React from 'react'
import {subscribe, unsubscribe} from 'pubsub-js'
export default class LogComponent extends React.PureComponent {
    subscription:string = ""
    state={logMessage: ""}
    componentDidMount(){
        this.subscription = subscribe("log", (topic:string, message:string) => {
            this.setState({logMessage: message})
        })
    }
    componentWillUnmount(){
        unsubscribe(this.subscription)
    }
    render(){
        return (
        <p>Log Component {this.state.logMessage}</p>

        )
    }
}