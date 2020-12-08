export interface Person {

    id:number
    lastname:string
    firstname:string
    gender:string
    height:number

}

export class PeopleModel{
    people: Map<Number, Person>
    counter = 0
    constructor(){
        this.people = new Map()
    }

    create(lastname:string, firstname:string, gender='x', height=173){
        this.counter++
        const id = this.counter
        const newPerson:Person = {id, lastname, firstname, gender, height}
        this.people.set(id, newPerson)
        return id

    }

    findById(id:number){
        return this.people.get(id)

    }

    findAll(){
        return Array.from(this.people.values())
    }

    update(person:Person){
        this.people.set(person.id, person)
    }

    deleteById(id:number){
        this.people.delete(id)

    }

    findIdsForLastname(lastname:string){
        return Array.from(this.people.values()).filter((person) => person.lastname === lastname).map((person) => person.id)
    }



}

