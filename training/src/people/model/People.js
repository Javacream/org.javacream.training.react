export class Person {
    constructor(id, lastname, firstname, height, gender){
        this.id = id
        this.lastname = lastname
        this.firstname = firstname
        this.gender = gender
        this.height = height
    }

    info(){
        return `Person: lastname: ${this.lastname}, firstname=${this.firstname}, height=${this.height}, gender=${this.gender}`
    }

}


export class PeopleModel{
    constructor(){
        this.people = new Map()
        this.counter = 0
    }

    create(lastname, firstname, height, gender){
        const person = new Person(this.counter, lastname, firstname, height, gender)
        this.people.set(person.id, person)
        this.counter++
        return person
    }
    
    allPeople() {
        return Array.from(this.people.values())
    }
    
    findByByGender(gender){
        return this.allPeople().filter((p) => p.gender === gender)
    }
    findByLastname(lastname){
        return this.allPeople.filter((p) => p.lastname === lastname)
    }
    
    allInfos(){
        return this.allPeople().map((person) => person.info())
    }

    deleteById(id){
        this.people.delete(id)
    }
}