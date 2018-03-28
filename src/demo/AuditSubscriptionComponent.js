import React, {Component} from 'react';
import PubSub from 'pubsub-js'

let messages = []
let handleAuditMessage = (topic, message) => {
  messages.push(message)
}
PubSub.subscribe("AUDIT", handleAuditMessage)


class AuditSubscriptionComponent extends Component {
  state= {
    messages: messages
  }

  componentDidMount(){
    this.setState({messages: messages})
  }

  render(){
  let messages = this.state.messages.map((m) => <li>{m}</li>)
  return (
        <div>
          <ul>
            {messages}
          </ul>
        </div>

    )
  }
}
export {AuditSubscriptionComponent}
