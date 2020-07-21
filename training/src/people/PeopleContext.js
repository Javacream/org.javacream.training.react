import {PeopleController} from './model/PeopleController'
import {profile} from './test/PeopleData'
import {peopleData} from './test/PeopleData'

let peopleController = new PeopleController()
let userProfile = profile
let peopleList = peopleData.allPeople()
export {peopleController, userProfile, peopleList}