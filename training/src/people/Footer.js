import ClockClassComponent from "../util/ClockClassComponent"
import ClockFunctionalComponent from "../util/ClockFunctionalComponent"
import "./Footer.css"
import { company } from "./PeopleContext"
export default function Footer(){
    return (
        <div className="Footer">
            <p>{company}</p>
            <ClockClassComponent></ClockClassComponent>
            <ClockFunctionalComponent></ClockFunctionalComponent>
        </div>
            )
}

