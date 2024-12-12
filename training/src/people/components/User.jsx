import "./User.css"
import {user} from '../PeopleContext'
import PersonComponent from "./PersonComponent"
export default function User(){
    return (
        <div className="User">
            <PersonComponent person={user} detail={false} />
        </div>
    )
}