export interface Person{
    lastname: String
    firstname: String
    personId: Number
}

export class PersonClass implements Person{
    lastname: String
    firstname: String
    personId: Number

    constructor(personId: Number, lastname: String, firstname: String){
        this.lastname = lastname;
        this.firstname = lastname;
        this.personId = personId;
    }
}

class PeopleModel{
    data: Map<Number, Person>
    constructor(){
      this.data = new Map()
    }
  
    add(person:Person){
      this.data.set(person.personId, person)
    }
  
    people(): Array<Person>{
      return Array.from(this.data.values())
    }
  
    update(person:Person){
      this.data.set(person.personId, person)
    }
  
    personOf(personId:Number):Person|undefined{
      return this.data.get(personId)
    }
  }

export let samplePerson = new PersonClass(42, "Mustermann", "Hans");