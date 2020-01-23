export interface Person{
    lastname: string
    firstname: string
    id: number
    height?: number
    gender: string
}

export class PersonClass implements Person{
    constructor(readonly id: number, readonly lastname: string, public firstname: string, readonly gender:string, readonly height:number = 177){

    }
    info = () => {
        return `Hello, my name is ${this.firstname} ${this.lastname}` //this ist immer an die Instanz gebunden
    }
}

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
    personBy(lastname:string):Array<Person>{
      let people = Array.from(this.data.values())
      return people.filter(p => p.lastname === lastname)
    }
  }

