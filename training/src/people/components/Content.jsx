import { BrowserRouter, Link } from "react-router-dom"
import {Routes, Route} from "react-router"
import "./Content.css"
import CreatePerson from "./CreatePerson"
import PeopleList from "./PeopleList"
export default function Content(){
    return (
        <>
            <BrowserRouter>
                <Link to="/list">List</Link>
                <Link to="/create">Create</Link>
                <Routes>
                    <Route path="/list" element={<PeopleList></PeopleList>} />
                    <Route path="/create" element={<CreatePerson></CreatePerson>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

