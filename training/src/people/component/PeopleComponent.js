import React from 'react'
import PersonComponent from './PersonComponent'
export default function PeopleComponent(props){
    const peopleHtml = props.people.allPeople().map( (p) => <li key={p.id}><PersonComponent  person={p} detail={true} /></li>)
    return (
        <div><ol>{peopleHtml}</ol></div>    
    );
}
