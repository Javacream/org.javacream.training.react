import React from 'react'
import {peopleModel} from './PeopleApplicationContext'
import PersonComponent from './PersonComponent'
export default function PeopleListComponent(){

    const peopleList = peopleModel.findAll()
    const peopleHtmlList = peopleList.map((person) => <li key={person.id}><PersonComponent detail={true} className="left" person={person} /></li>)
    return (
        <ul>
            {peopleHtmlList}
       </ul>
    )
}