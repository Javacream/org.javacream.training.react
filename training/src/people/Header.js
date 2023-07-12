import "./Header.css"
import { applicationTitle } from "./PeopleContext"
export default function Header(){
    return (
        <div className="Header">
            <h3>{applicationTitle}</h3>
        </div>
    )
}
