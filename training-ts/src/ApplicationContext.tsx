import {PeopleModel} from './model/People'
import {PeopleController} from './controller/PeopleController'
import PubSub from 'pubsub-js'

export const peopleModel = new PeopleModel()
export const peopleController = new PeopleController()
export const notificationBus = PubSub