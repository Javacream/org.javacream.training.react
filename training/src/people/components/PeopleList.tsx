import React from 'react'
import { Person } from '../model/people'
import PersonComponent from './Person'
type PeopleListProps = {
    people:Array<Person>
}
export default function PeopleList(props:PeopleListProps){
    const allPeople:Array<Person> = props.people
    const allPeopleHtml:Array<JSX.Element> = allPeople.map((person) => <li key={person.id}><PersonComponent person={person}></PersonComponent></li>)
    return (
        <>
        <h3>PEOPLE LIST</h3>
        <ul>
            {allPeopleHtml}
        </ul>
        </>
    )

}