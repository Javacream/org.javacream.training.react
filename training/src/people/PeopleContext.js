import {Person, PeopleModel} from './model/PeopleModel'
export const applicationTitle = "People"
export const company = "Javacream"

export const peopleModel = new PeopleModel()
peopleModel.create("Sawitzki", "Rainer", 183, 'm')
peopleModel.create("Musterfrau", "Hannah", 199, 'f')
peopleModel.create("Schneider", "Andrea", 183, 'd')

export let user = new Person(1000, "Schneider", "Edgar", 188, 'd')
