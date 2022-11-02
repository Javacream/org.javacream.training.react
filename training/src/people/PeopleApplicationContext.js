import { PeopleModel } from "./model/People";

let peopleModel = new PeopleModel()
let applicationTitle= "P E O P L E"
let company= "Javacream"

let peopleData = [
    {id: "1000", lastname: "Sawitzki", firstname:"Rainer"},
    {id: "1001", lastname: "Meier", firstname:"Hanna", gender:"f", height: 177},
    {id: "1003", lastname: "Schimmerman", firstname:"Arnim", gender:"m", height:155},
]
peopleModel.people = peopleData

export {peopleModel, applicationTitle, company}


