import React from 'react';
import {Link } from 'react-router-dom'


const NavigationComponent = (props) => {
    return (
      <div>
        <hr />
        <Link to="/">Home</Link>
        <Link to="/people">People</Link>
        <Link to="/functionDemo">Function Demo</Link>
        <Link to="/clientServerDemo">Client Server Demo</Link>
      </div>
    )
}
export {NavigationComponent}
