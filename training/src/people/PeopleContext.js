import {Person, PeopleModel} from './model/PeopleModel'
import {Subject} from 'rxjs'
export const applicationTitle = "People"
export const company = "Javacream"

export let whiteboard = {
    personCreation: new Subject(),
    personDeletion: new Subject(),
    log: new Subject()

}

whiteboard.personCreation.subscribe((p) => whiteboard.log.next("Created person " + p.id))
export const peopleModel = new PeopleModel()

const p1 = new Person (100, "Sawitzki", "Rainer", 183, 'm')
const p2 = new Person (101, "Musterfrau", "Hannah", 199, 'f')
const p3 = new Person (102, "Schneider", "Andrea", 183, 'd')

peopleModel.people = [p1, p2, p3]
export let user = new Person(1000, "Schneider", "Edgar", 188, 'd')


