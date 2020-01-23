import {testPerson} from './test/testData'
import {PeopleController} from './people/controller/PeopleController'
import { PeopleModel } from './people/model/People';

export const header = "P E O P L E";
export const profile = testPerson;
export const peopleController:PeopleController = new PeopleController()
export const peopleModel:PeopleModel = new PeopleModel()
peopleModel.add(testPerson)