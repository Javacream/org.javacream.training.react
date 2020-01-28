import React from 'react';
import { Person } from '../model/People';
import PersonComponent from './PersonComponent';

const PeopleListComponent = (props: {people: Array<Person>}) => {
    let htmlPeople = props.people.map( (p) => <PersonComponent key={p.id} person={p} />)
    return (
    <li>{htmlPeople}</li>
    )


}

export default PeopleListComponent