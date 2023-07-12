import ClockClassComponent from "../util/ClockClassComponent"
import "./Footer.css"
import { company } from "./PeopleContext"
export default function Footer(){
    return (
        <div className="Footer">
            <p>{company}</p>
            <ClockClassComponent></ClockClassComponent>
        </div>
            )
}

