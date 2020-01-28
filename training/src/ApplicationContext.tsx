import {testHeaderText, prototypePerson, testContentText, testPeople} from './test/testData'
import { PeopleModel } from './people/model/People'

export let peopleModel = new PeopleModel()
export let userProfile = prototypePerson
export const headerText = testHeaderText
export const defaultContent = testContentText
//export const peopleList = testPeople;