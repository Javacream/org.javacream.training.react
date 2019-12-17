import React from 'react';
import PeopleComponent from './PeopleComponent'
export default function PeopleContent(props){
    return (
        <PeopleComponent people={props.people}/>
    )
}
