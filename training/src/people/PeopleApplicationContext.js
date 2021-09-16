import { PeopleModel } from "./model/People";

let peopleModel = new PeopleModel()
let peopleData = [
    {id: "1000", lastname: "Sawitzki", firstname:"Rainer"},
    {id: "1001", lastname: "Meier", firstname:"Hanna", gender:"f", height: 177},
    {id: "1003", lastname: "Schimmerman", firstname:"Arnim", gender:"m", height:155},
]
peopleModel.people = peopleData

let applicationTitle= "P E O P L E"
let company= "Javacream"
let user={id: "9999", lastname: "Mustermann", firstname:"Max", gender:"m", height:155}
export {peopleModel, applicationTitle, company, user}
setTimeout(() => {user.lastname="Meier"; console.log(user.lastname)}, 2000)