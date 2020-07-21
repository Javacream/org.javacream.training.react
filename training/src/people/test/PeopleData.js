import {Person} from '../model/Person'
import {PeopleController} from '../model/PeopleController'

let profile = new Person(42, "Mustermann", "Hans", 196, "m");
let peopleData = new PeopleController()
peopleData.add("Sawitzki", "Rainer", 183, 'm')
peopleData.add("Fabricius", "Carola", 176, 'f')
peopleData.add("Sawitzki", "Klaus", 181, 'm')
peopleData.allPeople().push(profile)
export {profile, peopleData} 

