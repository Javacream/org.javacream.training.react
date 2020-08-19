import { Person } from "../model/People"

export default class PeopleController{
    async loadPeople():Promise<Array<Person>>{
        try{
            let response = await fetch("http://localhost:8080/people")
            let people:Array<Person> = await response.json()
            return people
        }
        catch(error){
            console.log(error)
            return new Array()
        }
    }
    async loadPersonById(id:number):Promise<Person|undefined>{
        try{
            let response = await fetch(`http://localhost:8080/people/${id}`)
            let person:Person = await response.json()
            return person
        }
        catch(error){
            console.log(error)
        }
    }

}