import React from 'react';

const PersonComponent = (props) => {

    const handleNameChange = () => {
      props.handleNameChange(props.index)
    }

    return (
      <li>
        <p>Lastname: {props.lastname}</p>
        <p>Firstname: {props.firstname}</p>
        <p>Married: <input type="checkbox" value="Married" checked={props.married} readOnly="true"></input></p>
        <p><input type="button" value="Change name!" onClick={handleNameChange}></input></p>
      </li>
  )
}

export {PersonComponent}
