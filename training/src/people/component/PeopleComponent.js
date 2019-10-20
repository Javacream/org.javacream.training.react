import React from 'react'
import PersonComponent from './PersonComponent'
let PeopleComponent = (props) => {
    const peopleHtml = props.people.allPeople().map( (p) => <li key={p.id}><PersonComponent  person={p} detail={true} /></li>)
    return (
        <div><ol>{peopleHtml}</ol></div>    
    );
}

export default PeopleComponent