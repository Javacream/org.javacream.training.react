import React from 'react';
import { Person } from '../model/People';
const PersonComponent = (props: {person:Person}) => {
    return (<p>{props.person.firstname} {props.person.lastname}</p>)
}

export default PersonComponent
