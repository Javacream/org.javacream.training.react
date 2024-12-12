import "./Footer.css"
import {company} from '../PeopleContext'
import ClockClassComponent from "../../util/ClockClassComponent"
import ClockFunctionalComponent from "../../util/ClockFunctionalComponent"
export default function Footer(){
    return (
        <div className="Footer">
            <ClockClassComponent />
            <ClockFunctionalComponent />
            <p>{company}</p>
        </div>
            )
}

