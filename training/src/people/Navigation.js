import {Link} from 'react-router-dom'

export default function Navigation(){
    return(
        <>
            <Link to="/list">People List</Link>
            <Link to="/create">New Person</Link>
            <Link to="/">Home</Link>

        </>
    )
}