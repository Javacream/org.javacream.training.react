import React from 'react';
let PersonComponent = (props) => {
    if (props.detail){
        return (
            <p className={props.className}>Firstname: {props.person.firstname}, Lastname:  {props.person.lastname}, Gender: {props.person.gender}, Height: {props.person.height}</p>
        );
    }
    else{
        return (
            <p className={props.className}>{props.person.firstname} {props.person.lastname}</p>
        );
    }
}

export default PersonComponent 