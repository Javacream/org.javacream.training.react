import { PeopleModel } from "./model/People";
import {Subject} from 'rxjs'
import {configureStore} from '@reduxjs/toolkit'
import counterReducers from '../demo/redux/CounterSlice'
let peopleModel = new PeopleModel()
let applicationTitle= "P E O P L E"
let company= "Javacream"
const baseUrl = "http://h2908727.stratoserver.net:8080/people" //REST-Server, der Personen-Daten liefert

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

const store = configureStore(
    {
        reducer: {
            counter: counterReducers
        }
    }
)
export {peopleModel, applicationTitle, company, baseUrl, whiteboard, store}


