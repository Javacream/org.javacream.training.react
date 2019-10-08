import PubSub from 'pubsub-js'

class LogModel{

    constructor(){
        PubSub.subscribe("Javacream.People", this.add)
    }
    messages = []
    add = (topic, message) =>{
        this.messages.push({topic, message})
        PubSub.publish("Javacream.ModelChange.Log")
    }

}
let logModel = new LogModel()
export default logModel
