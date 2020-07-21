import React from 'react';
import PersonComponent from './PersonComponent'

function PeopleListComponent(props){
    const peopleHtml = props.peopleList.map( (p) => <div key={p.id}><PersonComponent  person={p} detail={true} /> </div>)
        return (
    <>
    <h2>People List</h2>    
    <>{peopleHtml}</>
    </>
    )
}

export default PeopleListComponent