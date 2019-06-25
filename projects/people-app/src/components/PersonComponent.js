import React from 'react';
import PropTypes from 'prop-types';
let PersonComponent = (props) => {
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

export {PersonComponent}