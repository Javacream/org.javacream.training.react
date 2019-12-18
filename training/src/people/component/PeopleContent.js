import React from 'react';
import PeopleComponent from './PeopleComponent'
import PersonInputFormComponent from "./PeopleInputFormComponent"
import PersonFromServerComponent from "./PeopleFromServerComponent"
export default function PeopleContent(props){
    return (
        <>
        <PeopleComponent people={props.people}/>
        <hr />
        <PersonInputFormComponent createPersonHandler={props.createPersonHandler}/>
        <hr />
        <PersonFromServerComponent />
        </>
        )
}
