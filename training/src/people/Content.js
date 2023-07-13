import "./Content.css"
import {BrowserRouter, Link} from 'react-router-dom'
import {Route, Routes} from 'react-router'
import PeopleList from './PeopleList'
import CreatePerson from "./CreatePerson"
import Navigation from "./Navigation"
import Home from "./Home"
export default function Content(){
    return (
        <>
        <BrowserRouter>
            <Navigation></Navigation>
            <Routes>
                <Route path = "/list" element={<PeopleList />}></Route>
                <Route path = "/create" element={<CreatePerson />}></Route>
                <Route path = "/" element={<Home />}></Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}


