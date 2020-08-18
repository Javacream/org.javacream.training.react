import React from 'react'
import PersonComponent from './PersonComponent'
export default function PeopleListComponent(props:any){
    const peopleList = props.people
    const peopleListHtml = peopleList.map( (person:any) => <li key={person.id}><PersonComponent person={person} detail={true}></PersonComponent></li>)

    return (
        <>
            <p>PEOPLE LIST</p>
            <ul>
                {peopleListHtml}
            </ul>
        </>
    )
}