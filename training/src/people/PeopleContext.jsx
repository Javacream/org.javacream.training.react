import {Person,  PeopleModel } from "./model/PeopleModel"
import {Subject} from 'rxjs'
export const applicationTitle = 'PEOPLE'
export const company = 'Javacream'
export let peopleModel = new PeopleModel()
export let personCreation = new Subject()
export let personDeletion = new Subject()
export let peopleLog = new Subject()
personDeletion.subscribe((id) => peopleLog.next('Deleted person ' + id))
personCreation.subscribe((id) => peopleLog.next('Created person ' + id))

peopleModel.create('Doe', 'Johanna', 176, 'f')
peopleModel.create('Sawitzki', 'Rainer', 183, 'm')
peopleModel.create('Smith', 'Andrea', 156, 'd')
export let user = new Person(1000, 'Doe', 'John', 199, 'd')
setTimeout(() => {user.lastname = 'Smith'}, 1000)

