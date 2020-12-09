import {Person} from '../model/people'
import config from '../../Configuration'
class PeopleController{
    async findAll(){
        let response:Response = await fetch(config.endpoint)
        let people:Array<Person> = await response.json()
        return people

    }

    async findById(id:number){
        let response:Response = await fetch(config.endpoint + "/" + id)
        let person:Person = await response.json()
        return person

    }

}

let peopleController = new PeopleController()
export default peopleController