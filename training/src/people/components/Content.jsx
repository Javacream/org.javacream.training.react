import { BrowserRouter } from "react-router-dom"
import {Routes, Route} from "react-router"
import "./Content.css"
import CreatePerson from "./CreatePerson"
import PeopleList from "./PeopleList"
export default function Content(){
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/list" element={<PeopleList></PeopleList>} />
                    <Route path="/create" element={<CreatePerson></CreatePerson>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

