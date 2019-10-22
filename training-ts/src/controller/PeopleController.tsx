import {Person} from '../model/People'
export class PeopleController{
    async loadData():Promise<Array<Person>> {
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

      async searchById(id:number):Promise<Person|undefined> {
        try{
          let result:Response = await fetch(`http://localhost:8080/people/${id}`)
          let data:Person = await result.json()
          return data
        }
        catch(err){
          alert("Something went wrong: " + err)
          return undefined
        }
      }

    }