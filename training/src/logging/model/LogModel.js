import PubSub from 'pubsub-js'

class LogModel{

    constructor(){
        PubSub.subscribe("javacream.people.created", this.add)
        PubSub.subscribe("javacream.people.deleted", this.add)
    }
    messages = []
    add = (topic, message) =>{
        this.messages.push({topic, message})
        PubSub.publish("javacream.log")
    }

}
let logModel = new LogModel()
export default logModel
