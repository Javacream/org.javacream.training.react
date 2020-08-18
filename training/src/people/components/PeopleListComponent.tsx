import React from 'react'
import {peopleModel} from '../ApplicationContext'
import PersonComponent from './PersonComponent'
export default function PeopleListComponent(){
    const peopleList = peopleModel.findAll()
    const peopleListHtml = peopleList.map( (person) => <li><PersonComponent person={person} detail={true}></PersonComponent></li>)

    return (
        <>
            <p>PEOPLE LIST</p>
            <ul>
                {peopleListHtml}
            </ul>
        </>
    )
}