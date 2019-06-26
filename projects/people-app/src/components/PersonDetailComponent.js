import React from 'react';
export const PersonDetailComponent = (props) => {

    return (
        <>
            <p>PersonComponent</p>
            <ul>
                <li>{props.person.personId}</li>
                <li>{props.person.firstname}</li>
                <li>{props.person.lastname}</li>
            </ul>
        </>
    )
}

