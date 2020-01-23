import {testPerson, testPeople} from './test/testData'
import {PeopleController} from './people/controller/PeopleController'
export const header = "P E O P L E";
export const profile = testPerson;
export const people = testPeople;

export const peopleController = new PeopleController()

