import "./Footer.css"
import {company} from '../PeopleContext'
import ClockClassComponent from "../../util/ClockClassComponent"
export default function Footer(){
    return (
        <div className="Footer">
            <ClockClassComponent />
            <p>{company}</p>
        </div>
            )
}

