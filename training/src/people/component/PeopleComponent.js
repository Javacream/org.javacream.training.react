import React from 'react'
import PersonComponent from './PersonComponent'
import PubSub from 'pubsub-js'
export default function PeopleComponent(props){
    const peopleHtml = props.people.allPeople().map( (p) => <li  onDoubleClick= {() => {PubSub.publish("javacream.people.delete", p.id)}} key={p.id}><PersonComponent  person={p} detail={true}/></li>)
    return (
        <div><ol>{peopleHtml}</ol></div>    
    );
}
