import {Link} from 'react-router-dom'
export default function NavigationComponent(){
    return(
        <>
            <Link to="/">Home</Link>
            <Link to="/list">People List</Link>
            <Link to="/delete">Person Delete</Link>
            <Link to="/create">Person Create</Link>
        </>
    )
}