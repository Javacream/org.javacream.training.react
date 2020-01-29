import {testHeaderText, prototypePerson, testContentText} from './test/testData'
import { PeopleModel } from './people/model/People'
import PeopleController from './people/controller/PeopleController'
import PubSub from 'pubsub-js'

export let peopleModel = new PeopleModel()
export let peopleController = new PeopleController()
export let userProfile = prototypePerson
export const headerText = testHeaderText
export const defaultContent = testContentText
export const notification = PubSub
//export const peopleList = testPeople;