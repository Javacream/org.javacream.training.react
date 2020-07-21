import { Person } from "./Person";

class PeopleController{

    constructor(){
        this.people = []
        this.counter = 0
    }

    add(lastname, firstname, height, gender){
        const person = new Person(this.counter, lastname, firstname, height, gender)
        this.people.push(person)
        this.counter++
    }
    
    allPeople() {
        return this.people
    }
    
    peopleByGender(gender){
        return this.people.filter((p) => p.gender === gender)
    }
    eopleLastname(lastname){
        return this.people.filter((p) => p.lastname === lastname)
    }
    
    allInfos(){
        return this.people.map((person) => person.info())
    }
    }
export {PeopleController}