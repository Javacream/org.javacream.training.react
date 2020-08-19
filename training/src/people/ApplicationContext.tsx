import PeopleController from "./controller/PeopleController"
import { Person } from './model/People'

export let peopleController = new PeopleController()
export let config = {company: "Javacream", "applicationName": "__ P E O P L E  __"}

export let profile:Person = {id: 42, lastname: "Mustermann", firstname: "Hans", gender: "x", height: 177}

setTimeout( () => {profile.lastname = "Meier"; console.log(profile.lastname)}, 5000)