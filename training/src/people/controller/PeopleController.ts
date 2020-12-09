import {Person} from '../model/people'
import config from '../../Configuration'
class PeopleController{
    async findAll(){
        let response:Response = await fetch(config.endpoint)
        let people:Array<Person> = await response.json()
        return people

    }
}

let peopleController = new PeopleController()
export default peopleController