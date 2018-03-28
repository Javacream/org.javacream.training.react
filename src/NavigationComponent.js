import React from 'react';
import {Link } from 'react-router-dom'


const NavigationComponent = (props) => {
    return (
      <div>
        <hr />
        <Link to="/">Home</Link>
        <Link to="/people">People</Link>
        <Link to="/peopleFromServer">People Server</Link>
        <Link to="/todo">ToDo List</Link>
        <Link to="/functionDemo">Function Demo</Link>
        <Link to="/clientServerDemo">Client Server Demo</Link>
        <Link to="/auditDemo">Show Audit</Link>
      </div>
    )
}
export {NavigationComponent}
