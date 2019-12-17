import { Person } from "./Person";
import PubSub from "pubsub-js"
export class People{
    constructor(){
        this.people = new Map()
        this.counter = 0
        PubSub.subscribe("javacream.people.delete", this.handleDelete)
    }

    handleDelete = (topic, id) => {
        this.deleteById(id)
    }
    add(lastname, firstname, height, gender){
        const person = new Person(this.counter, lastname, firstname, height, gender)
        this.people.set(person.id, person)
        this.counter++
        PubSub.publish("javacream.people.created", person)
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

    deleteById(id){
        this.people.delete(id)
        PubSub.publish("javacream.people.deleted", `deleted person ${id}`)
    }
}