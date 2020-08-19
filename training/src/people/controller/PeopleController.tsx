import { Person } from "../model/People"

export default class PeopleController{
    counter = 0
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
    async savePerson(lastname:string, firstname:string, gender:string, height:number):Promise<void>{
            this.counter++
            const id = this.counter
            const person:Person = ({id, lastname, firstname, gender, height}) //{short for id: id, lastname: lastname}
        try{
            await fetch(`http://localhost:8080/people/`, {method: 'POST', body: JSON.stringify(person)})
        }
        catch(error){
            console.log(error)
        }
    }
}