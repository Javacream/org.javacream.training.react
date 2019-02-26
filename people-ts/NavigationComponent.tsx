import React from 'react';
import {Link } from 'react-router-dom'


const NavigationComponent = (props) => {
    return (
      <div>
        <hr />
        <Link to="/">Welcome</Link>
        <Link to="/peopleSample">Sample Data</Link>
        <Link to="/people">People</Link>
      </div>
    )
}
export {NavigationComponent}