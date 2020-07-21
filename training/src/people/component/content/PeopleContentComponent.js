import React from 'react';
import {peopleData} from '../../test/PeopleData' 
function PeopleContentComponent(){
    let people = peopleData.allPeople()
    let peopleHtml = people.map(person => <p>{person.info()}</p>)
    return (
    <>
    <h2>People List</h2>    
    <>{peopleHtml}</>
    </>
    )
}

export default PeopleContentComponent