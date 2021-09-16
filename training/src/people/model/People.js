export class Person {
    constructor(lastname, firstname, height){
        this.lastname = lastname
    }

    info(){
        return `Person: lastname: ${this.lastname}, firstname=${this.firstname}, height=${this.height}, gender=${this.gender}`
    }

}


export class PeopleModel{
    constructor(){
        this.people = []
        this.counter = 0
    }

    create(lastname, firstname, height, gender){
        const person = new Person(this.counter, lastname, firstname, height, gender)
        this.people.push(person)
        this.counter++
        return person
    }
    
    allPeople() {
        return this.people
    }
    
    findByByGender(gender){
        return this.people.filter((p) => p.gender === gender)
    }
    findByLastname(lastname){
        return this.people.filter((p) => p.lastname === lastname)
    }
    
    allInfos(){
        return this.people.map((person) => person.info())
    }
}
