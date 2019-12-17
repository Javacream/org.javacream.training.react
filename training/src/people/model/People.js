import { Person } from "./Person";
export class People{
    constructor(){
        this.people = new Map()
        this.counter = 0
    }

    add(lastname, firstname, height, gender){
        const person = new Person(this.counter, lastname, firstname, height, gender)
        this.people.set(person.id, person)
        this.counter++
    }

    allPeople() {
        return Array.from(this.people.values())
    }

    allPeopleBy(gender){
        return this.allPeople().filter((p) => p.gender === gender)
    }

    allInfos(){
        return this.allPeople().map((person) => person.info())
    }
}