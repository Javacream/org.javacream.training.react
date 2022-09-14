import {Link} from 'react-router-dom'
export default function NavigationComponent(){
    return (
        <>
            <div><Link to="/">Home</Link></div>
            <div><Link to="/list">List</Link></div>
            <div><Link to="/create">Create</Link></div>
            <div><Link to="/search">Search</Link></div>
        </>
    )
}