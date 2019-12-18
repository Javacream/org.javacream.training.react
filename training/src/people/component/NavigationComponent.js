import React from 'react'
import {Link} from 'react-router-dom'

const NavigationComponent = (props) => {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/people">People List</Link>
            <Link to="/peopleInput">Create new Person</Link>   
            <Link to="/peopleFromServer">Show People From Server</Link>        
            <Link to="/peopleSearch">Search Person</Link>        
        </>
        )
}

export default NavigationComponent