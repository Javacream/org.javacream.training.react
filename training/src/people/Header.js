import "./Header.css"
import { applicationTitle, user } from "./PeopleContext"
import PersonComponent from "./PersonComponent"

export default function Header(){
    return (
        <div className="Header">
            <h3>{applicationTitle}</h3>
            <PersonComponent person={user} detail={false}></PersonComponent>
        </div>
    )
}
