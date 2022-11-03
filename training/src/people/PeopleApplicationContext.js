import { PeopleModel } from "./model/People";
import {Subject} from 'rxjs'
let peopleModel = new PeopleModel()
let applicationTitle= "P E O P L E"
let company= "Javacream"

let peopleData = new Map()
peopleData.set("1000", {id: "1000", lastname: "Sawitzki", firstname:"Rainer"})
peopleData.set("1001", {id: "1001", lastname: "Meier", firstname:"Hanna", gender:"f", height: 177})
peopleData.set("1003", {id: "1003", lastname: "Schimmerman", firstname:"Arnim", gender:"m", height:155})

peopleModel.people = peopleData

let whiteboard = {
    personCreated: new Subject(),
    personDeleted: new Subject()

}

const log = new Subject()
whiteboard.personCreated.subscribe((message) => log.next(message))
whiteboard.personDeleted.subscribe((message) => log.next(message))

whiteboard.log = log
export {peopleModel, applicationTitle, company, whiteboard}


