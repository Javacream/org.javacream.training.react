import React from 'react'
import {Link} from 'react-router-dom'


export const NavigationComponent = (props) => {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/people">People</Link>
            <Link to="/peopleInput">Create new Person</Link>        </>
    )
}