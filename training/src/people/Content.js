import "./Content.css"
import {BrowserRouter, Link} from 'react-router-dom'
import {Route, Routes} from 'react-router'
import PeopleList from './PeopleList'
import CreatePerson from "./CreatePerson"
export default function Content(){
    return (
        <>
        <BrowserRouter>
            <Link to="/list">People List</Link>
            <Link to="/create">New Person</Link>
            <Link to="/nirwana">Irgendwo</Link>
            <Routes>
                <Route path = "/list" element={<PeopleList />}></Route>
                <Route path = "/create" element={<CreatePerson />}></Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}


