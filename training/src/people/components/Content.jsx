import "./Content.css"
import CreatePerson from "./CreatePerson"
import PeopleList from "./PeopleList"
export default function Content(){
    return (
        <>
            <PeopleList />
            <hr />
            <CreatePerson />
        </>
    )
}

