import { BrowserRouter, Link } from "react-router-dom"
import {Routes, Route} from "react-router"
import "./Content.css"
import CreatePerson from "./CreatePerson"
import PeopleList from "./PeopleList"
import CounterComponent from '../../counter/CounterComponent'
import PeopleServerList from "./PeopleServerList"
export default function Content(){
    return (
        <>
            <BrowserRouter>
                <Link to="/list">List</Link>
                <Link to="/create">Create</Link>
                <Link to="/redux">Redux</Link>
                <Link to="/serverList">Server List</Link>
                <Routes>
                    <Route path="/list" element={<PeopleList></PeopleList>} />
                    <Route path="/create" element={<CreatePerson></CreatePerson>} />
                    <Route path="/redux" element={<CounterComponent></CounterComponent>} />
                    <Route path="/serverList" element={<PeopleServerList />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

