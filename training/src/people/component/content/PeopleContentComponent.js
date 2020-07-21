import React from 'react';
import {peopleList} from '../../PeopleContext' 
import PersonComponent from './PersonComponent'

function PeopleContentComponent(){
    const peopleHtml = peopleList.map( (p) => <div key={p.id}><PersonComponent  person={p} detail={true} /> </div>)
        return (
    <>
    <h2>People List</h2>    
    <>{peopleHtml}</>
    </>
    )
}

export default PeopleContentComponent