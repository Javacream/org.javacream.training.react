import React from 'react';
const PersonComponent = (props) =>{
    return (
    <div>{props.person.info()}</div>)
}

export {PersonComponent}