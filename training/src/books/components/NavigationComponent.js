import {Link} from 'react-router-dom'
export default function NavigationComponent(props) {
    return (
        <>
        <p> Hello</p>
            <div><Link to="/">Home</Link></div>
            <div><Link to="/list">List</Link></div>
            <div><Link to="/search">Search</Link></div>
            <div><Link to="/create">Create</Link></div>
        </>
    )
}