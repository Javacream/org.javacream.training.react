import React from 'react'
import {PersonComponent} from './PersonComponent'
import {context} from '../Context'

export const PeopleComponent = () => {
    let samplePeople = context.samplePeople
    //peopleHtml is a list of HtmlElements
    let peopleHtml = samplePeople.map((person) => {
        return <PersonComponent key={person.personId} person={person} />
    }
    )
    return (
        <>
            <h2>People</h2>
            <ul>{peopleHtml}</ul>
        </>
    )
}
