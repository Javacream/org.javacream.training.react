import React from 'react'
import {Link} from 'react-router-dom'

const NavigationComponent = (props) => {
    return (
        <>
            <div><Link to="/">Home</Link></div>
            <div><Link to="/people">People List</Link></div>
            <div><Link to="/peopleInput">Create new Person</Link></div>   
            <div><Link to="/peopleFromServer">Show People From Server</Link></div>        
            <div><Link to="/peopleSearch">Search Person</Link></div>
        </>
        )
}

export default NavigationComponent