import React from 'react'
import { Person } from '../model/people'
import {peopleModel} from '../model/peopleData'
import PersonComponent from './Person'
export default function PeopleList(){
    const allPeople:Array<Person> = peopleModel.findAll()
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