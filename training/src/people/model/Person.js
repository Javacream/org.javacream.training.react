class Person{
    constructor(lastname, firstname, height, gender){
        this.lastname = lastname;
        this.firstname = firstname
        this.height = height
        this.gender = gender
    }

    info(){
        return `Person: lastname: ${this.lastname}, firstname=${this.firstname}, height=${this.height}, gender=${this.gender}`
    }
}

class Student extends Person{
    constructor(lastname, firstname, height, gender, university){
        super(lastname, firstname, height, gender)
        this.university = university
    }
    study(){
        return "i am studying"
    }
}
export {Person, Student}