import React from 'react'
import PubSub from 'pubsub-js'

export class LoggingComponent extends React.Component{

    state = {message: ""}
    constructor(){
        super()
        this.update = (action, createdId) => {
            this.setState({message: `Created person with id ${createdId}`})
        }
    }

    componentDidMount(){
        PubSub.subscribe("CREATED", this.update)
    }
    render(){
        return <p>{this.state.message}</p>
    }
}
