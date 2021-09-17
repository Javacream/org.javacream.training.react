import {Component} from 'react'
import PersonComponent from './PersonComponent'
import {peopleModel} from '../PeopleApplicationContext'
import PubSub from 'pubsub-js'
export default class PeopleListComponent extends Component{
    state = {people: peopleModel.allPeople() }

    componentDidMount(){
        this.subscription = PubSub.subscribe("person.create", this.update)
    }
    componentWillUnmount(){
        PubSub.unsubscribe(this.subscription)
    }
    update = (topic, data) => {
        this.setState({people: peopleModel.allPeople() })    
    }
    render(){
        let peopleHtml = this.state.people.map(p => <p key={p.id}><PersonComponent detail={true} person={p} /></p>)
        return (
            <>
            {peopleHtml}
            </>
    
        )
    
    }
}