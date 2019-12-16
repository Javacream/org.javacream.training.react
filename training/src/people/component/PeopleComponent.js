import React from 'react'
import {peopleData} from '../testdata/PeopleData'
function PeopleComponent(){

    let peopleInfo = peopleData.allPeople().map((person) => <li>{person.info()}</li>)
    return (
        <ol>{peopleInfo}</ol>
    )
}
export default PeopleComponent