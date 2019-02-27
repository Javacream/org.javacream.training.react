import {Person} from '../model/People'
export class PeopleController{
    async loadData():Promise<Array<Person>> {
        try{
          let result:Response = await fetch('http://localhost:8080/people')
          let data:Array<Person> = await result.json()
          return data
        }
        catch(err){
          alert("Something went wrong: " + err)
          return [];
        }
      }
}