let message = "Hello World"

function aDemoFunction(){
    
}
//Arrow-Syntax
let demo = (p1, p2) =>   {
    return "two"
}

class Person{
    constructor(lastname, firstname){
        this.lastname = lastname
        this.firstname = firstname
        this.fullName = this.firstname + " " + this.lastname
        this.sayHello = () => {
               return `Hello, my name is ${this.fullName}`
        }
        Object.freeze(this)
    }
}

class Student extends Person{
    constructor(lastname, firstname, university){
        super(lastname, firstname)
        this.university = university
    }

    study(){
        return `${this.sayHello()} studying at ${this.university}`
    }
}
class Worker extends Person{
    constructor(lastname, firstname, company){
        super(lastname, firstname)
        this.company = company
    }
    work(){
        return `${this.sayHello()} working at ${this.company}`
    }
}

export {message, demo, Person, Student, Worker}


