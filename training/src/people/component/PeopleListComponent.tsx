import React from 'react';
import { Person } from '../model/People';
import PersonComponent from './PersonComponent';

const PeopleListComponent = (props: {people: Array<Person>}) => {
    let htmlPeople = props.people.map( (p) => (<><li><PersonComponent key={p.id} person={p}/></li></>))
    return (
                <div className="content">
                    <h3>List of local people</h3>
                    <ol>{htmlPeople}</ol>
                </div>    
            )
}

export default PeopleListComponent