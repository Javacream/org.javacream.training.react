export class Person{
    constructor(id, lastname, firstname, height, gender){
        this.id = id;
        this.lastname = lastname
        this.firstname = firstname
        this.height = height
        this.gender = gender
    }

    info(){
        return  `Person: lastname: ${this.lastname}`
    }
}

export class PeopleModel{
    constructor(){
        this.counter = 0
        this.people = []
    }

    create(lastname, firstname, height, gender){
        const person = new Person(this.counter++, lastname, firstname, height, gender)
        this.people.push(person)
        return person
    }

    allPeople() {
        return this.people
    }
}