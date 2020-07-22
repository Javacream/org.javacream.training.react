import { Person } from "./Person";
import PubSub from 'pubsub-js'
class PeopleController{

    constructor(){
        this.people = []
        this.counter = 0;
    }

    add(lastname, firstname, height, gender){
        const person = new Person(this.counter, lastname, firstname, height, gender)
        this.people.push(person)
        this.counter++;
        PubSub.publish("log", `created ${person.info()}`)
        return person
    }
    
    allPeople() {
        return this.people
    }
    
    peopleByGender(gender){
        return this.people.filter((p) => p.gender === gender)
    }
    peopleLastname(lastname){
        return this.people.filter((p) => p.lastname === lastname)
    }
    
    allInfos(){
        return this.people.map((person) => person.info())
    }
    }
export {PeopleController}