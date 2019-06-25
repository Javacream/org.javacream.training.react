import { Person } from "./Person";

class PeopleModel{
    constructor(){
      this.data = new Map()
    }
  
    add(lastname, firstname){
      let personId = Math.floor((Math.random() * 1000) + 100);  
      let person = new Person(personId, lastname, firstname)
      this.data.set(person.personId, person)
      return personId
    }
  
    people(){
      return Array.from(this.data.values())
    }
  
    update(person){
      this.data.set(person.personId, person)
    }
  
    personWith(personId){
      return this.data.get(personId)
    }
    deleteWith(personId){
        this.data.delete(personId)
      }
    }

    export {PeopleModel}
