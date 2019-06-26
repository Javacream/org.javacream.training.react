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

    infoMethod(){
        return this.firstname + " " + this.lastname //this ist Context-Abhängig
    }

}

export class PeopleModel{
    data: Map<Number, Person>
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
  
    personOf(personId:Number):Person|undefined{
      return this.data.get(personId)
    }
  }

export let samplePerson = new PersonClass(42, "Mustermann", "Hans");

setTimeout(() => {
  samplePerson.firstname = "Changed!!!"
  console.log(samplePerson.info())
}, 2000)

