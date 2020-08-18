import React from 'react'
import PersonComponent from './PersonComponent'
import { Person } from '../model/People'
export default function PeopleListComponent(props:{people:Array<Person>}){
    const peopleList = props.people
    const peopleListHtml = peopleList.map( (person) => <li key={person.id}><PersonComponent person={person} detail={true}></PersonComponent></li>)

    return (
        <>
            <p>PEOPLE LIST</p>
            <ul>
                {peopleListHtml}
            </ul>
        </>
    )
}