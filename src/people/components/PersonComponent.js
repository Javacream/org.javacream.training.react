import React from 'react';
import PropTypes from 'prop-types';
const PersonComponent = (props) => {
  PersonComponent.propTypes={
    index: PropTypes.number.isRequired,
    lastname: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    married: PropTypes.bool.isRequired,
    handleNameChange: PropTypes.func.isRequired
  }
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
