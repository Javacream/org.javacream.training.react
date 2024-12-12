import {Person,  PeopleModel } from "./model/PeopleModel"

export const applicationTitle = 'PEOPLE'
export const company = 'Javacream'
export let peopleModel = new PeopleModel()
peopleModel.create('Doe', 'Johanna', 176, 'f')
peopleModel.create('Sawitzki', 'Rainer', 183, 'm')
peopleModel.create('Smith', 'Andrea', 156, 'd')
export let user = new Person(1000, 'Doe', 'John', 199, 'd')
setTimeout(() => {user.lastname = 'Smith'; console.log('*******' + user.lastname)}, 1000)