import { Person } from "./Person";
import PubSub from 'pubsub-js'
export class People{
    constructor(){
        this.people = []
        this.counter = 0
        PubSub.subscribe("PEOPLE", this.handleCreatePersonCallback)
    }

    add(lastname, firstname, height, gender){
        const person = new Person(this.counter, lastname, firstname, height, gender)
        this.people.push(person)
        this.counter++
    }

    allPeople() {
        return this.people
    }

    allPeopleBy(gender){
        return this.people.filter((p) => p.gender === gender)
    }

    allInfos(){
        return this.people.map((person) => person.info())
    }

    handleCreatePersonCallback = (topic, data) => {
        console.log("received notfication: " + data)
    }
}