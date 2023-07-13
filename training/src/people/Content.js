import "./Content.css"
import {BrowserRouter, Link} from 'react-router-dom'
import {Route, Routes} from 'react-router'
import PeopleList from './PeopleList'
import CreatePerson from "./CreatePerson"
import Navigation from "./Navigation"
import Home from "./Home"
import CounterComponent from "../counter/CounterComponent"
import PeopleServerList from "./PeopleServerList"
export default function Content(){
    return (
        <>
        <BrowserRouter>
            <Navigation></Navigation>
            <Routes>
                <Route path = "/list" element={<PeopleList />}></Route>
                <Route path = "/create" element={<CreatePerson />}></Route>
                <Route path = "/" element={<Home />}></Route>
                <Route path = "/redux" element={<CounterComponent />}></Route>
                <Route path = "/server" element={<PeopleServerList />}></Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}


