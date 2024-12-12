import "./Header.css"
import {applicationTitle} from '../PeopleContext'
import User from "./User"
export default function Header(){
    return (
        <div className="Header">
            <h3>{applicationTitle}</h3>
            <User className="User"/>
        </div>
    )
}
