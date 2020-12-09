import {Person} from '../model/people'
class PeopleController{
    endpoint = "http://h2908727.stratoserver.net:8080/people"
    async findAll(){
        let response:Response = await fetch(this.endpoint)
        let people:Array<Person> = await response.json()
        return people

    }
}

let peopleController = new PeopleController()
export default peopleController