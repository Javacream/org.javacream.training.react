import React, { Component } from "react";
import PubSub from 'pubsub-js'
export default class LogComponent extends Component{
    state = {messages: []}

    componentDidMount() {
        PubSub.subscribe("log", this.updateState)
    }

    updateState = (topic, message) => {
        let messages = this.state.messages
        messages.push(message)
        const length = Math.min(this.props.numberOfMessages, messages.length)
        const slicedMessages = [...messages].reverse().slice(0, length)
        this.setState({messages: slicedMessages})
    }
    render(){
        const htmlMessages = this.state.messages.map((m, i) => <p key={i}>{m}</p>)
        return (<>
                {htmlMessages}
                </>
        )
    }
}