import React from 'react';
import {peopleData} from '../../test/PeopleData' 
function PeopleContentComponent(){
    let people = peopleData.allPeople()
    let peopleHtml = people.map(person => <li>{person.info()}</li>)
    return (
    <ul>{peopleHtml}</ul>
    )
}

export default PeopleContentComponent