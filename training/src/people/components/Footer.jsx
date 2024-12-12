import "./Footer.css"
import {company} from '../PeopleContext'
import ClockClassComponent from "../../util/ClockClassComponent"
import ClockFunctionalComponent from "../../util/ClockFunctionalComponent"
import LogComponent from "../../util/LogComponent"
export default function Footer(){
    return (
        <>        
        <div className="Footer">
            <ClockClassComponent />
            <ClockFunctionalComponent />
            <LogComponent />
            <p>{company}</p>
        </div>
        </>

            )
}

