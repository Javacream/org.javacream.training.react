import React from 'react';
import {Link } from 'react-router-dom'

export const NavigationComponent = () => {
    return (
      <div>
        <hr />
        <Link to="/welcome">Welcome</Link>
        <Link to="/peopleSample">People Sample Data</Link>
        <Link to="/people">People</Link>
        <Link to="/peopleServer">People Server</Link>
      </div>
    )
}
