import React, {useState} from 'react';
import logModel from '../model/LogModel'
export default LoggingComponent = (props) => {
    const [messages, updateMessages] = useState([])
    
    updateState = () => {

        const length = Math.min(this.props.numberOfMessages, logModel.messages.length)
        const slicedMessages = [...logModel.messages].reverse().slice(0, length)
        updateMessages(slicedMessages)
    }
    const htmlMessages = this.state.messages.map((m, i) => <p key={i}>{JSON.stringify(m.message)}</p>)
    return (<>
            {htmlMessages}
            </>
    )
}