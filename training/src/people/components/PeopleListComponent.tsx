import React from 'react'
import PersonComponent from './PersonComponent'
import { Person } from '../model/PeopleModel'
type PeopleListPropType = {
    people:Array<Person>
}
export default function PeopleListComponent(props:PeopleListPropType){

    const peopleHtmlList = props.people.map((person) => <li key={person.id}><PersonComponent detail={true} className="left" person={person} /></li>)
    return (
        <ul>
            {peopleHtmlList}
       </ul>
    )
}