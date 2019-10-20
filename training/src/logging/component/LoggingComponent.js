import React, {Component} from 'react';
import PubSub from 'pubsub-js'
import logModel from '../model/LogModel'
export default class LoggingComponent extends Component{
    state = {messages: []};
    constructor(){
        super()
        PubSub.subscribe("Javacream.ModelChange.Log", this.updateState)
    }

    updateState = () => {

        const length = Math.min(this.props.numberOfMessages, logModel.messages.length)
        const slicedMessages = [...logModel.messages].reverse().slice(0, length)
        this.setState({messages: slicedMessages})
    }
    render(){
        const htmlMessages = this.state.messages.map((m, i) => <p key={i}>{JSON.stringify(m.message)}</p>)
        return (<>
                {htmlMessages}
                </>
        )
    }
}