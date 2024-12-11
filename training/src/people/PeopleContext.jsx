import { PeopleModel } from "./model/PeopleModel"

export const applicationTitle = 'PEOPLE'
export const company = 'Javacream'
export let peopleModel = new PeopleModel()
peopleModel.create('Doe', 'Johanna', 176, 'f')
peopleModel.create('Sawitzki', 'Rainer', 183, 'm')
peopleModel.create('Smith', 'Andrea', 156, 'd')