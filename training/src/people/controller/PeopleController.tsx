import {Person} from '../model/People'

export default class PeopleController{
    async allPeople():Promise<Array<Person>> {
        try{
          let result = await fetch('http://localhost:8080/people')
          let data = await result.json()
          return data
        }
        catch(err){
          alert("Something went wrong: " + err)
          return [];
        }
      }

    async findById(id: number):Promise<Person|undefined>{
        try{
            let response = await fetch("http://localhost:8080/people/" + id)
            let person = await response.json()
            return person

        }
        catch(error){
            console.log(error)
        }
    }

}