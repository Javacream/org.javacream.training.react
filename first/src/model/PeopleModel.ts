export interface Person{
    lastname: string
    firstname: string
    id: number
    height?: number
}

export class PersonClass implements Person{
    constructor(readonly id: number, readonly lastname: string, public firstname: string){
    }

    info = () => {
        return `Hello, my name is ${this.firstname} ${this.lastname}` //this ist immer an die Instanz gebunden
    }

}
export let currentUser:Person = {lastname: "Sawitzki", firstname:"Rainer", id:42}

export class PeopleModel{
    data: Map<number, Person>
    constructor(){
      this.data = new Map()
    }
  
    add(person:Person){
      this.data.set(person.id, person)
    }
  
    people(): Array<Person>{
      return Array.from(this.data.values())
    }
  
    update(person:Person){
      this.data.set(person.id, person)
    }
  
    personOf(personId:number):Person|undefined{
      return this.data.get(personId)
    }
  }

export let peopleModel = new PeopleModel();

export let samplePerson = new PersonClass(42, "Mustermann", "Hans");

setTimeout(() => {currentUser.lastname = "Meier"; console.log(currentUser.lastname )}, 5000);