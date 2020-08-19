import { PeopleModel } from "./model/People"
import PeopleController from "./controller/PeopleController"
import { Person } from './model/People'

export let peopleModel = new PeopleModel()
export let peopleController = new PeopleController()
export let config = {company: "Javacream", "applicationName": "__ P E O P L E  __"}

export let profile:Person = {id: 42, lastname: "Mustermann", firstname: "Hans", gender: "x", height: 177}

peopleModel.create("Sawitzki", "Rainer", 'm', 183)
peopleModel.create("Fabricius", "Carola", 'f', 176)
peopleModel.create("Sawitzki", "Klaus", 'm', 181)

setTimeout( () => {profile.lastname = "Meier"; console.log(profile.lastname)}, 5000)