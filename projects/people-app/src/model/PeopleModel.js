import { Person } from "./Person";

class PeopleModel{
    constructor(){
      this.data = new Map()
    }
  
    add(lastname, firstname){
      let id = Math.floor((Math.random() * 1000) + 100);  
      let person = new Person(id, lastname, firstname)
      this.data.set(person.id, person)
      return id
    }
  
    people(){
      return Array.from(this.data.values())
    }
  
    update(person){
      this.data.set(person.id, person)
    }
  
    personWith(id){
      return this.data.get(id)
    }
    deleteWith(id){
        this.data.delete(id)
      }
    }

    export {PeopleModel}
