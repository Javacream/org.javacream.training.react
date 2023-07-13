import {Link} from 'react-router-dom'

export default function Navigation(){
    return(
        <>
            <Link to="/list">People List</Link>
            <Link to="/create">New Person</Link>
            <Link to="/">Home</Link>
            <Link to="/redux">Counter</Link>
            <Link to="/server">People Server List</Link>

        </>
    )
}