import React from 'react';
import {Link } from 'react-router-dom'

const NavigationComponent = () => {
    return (
      <div>
        <hr />
        <p><Link to="/">Home</Link></p>
        <p><Link to="/people">People</Link></p>
        <p><Link to="/peopleInput">People Input</Link></p>
      </div>
    )
}

export default NavigationComponent