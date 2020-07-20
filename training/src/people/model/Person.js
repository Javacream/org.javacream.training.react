class Person{
    constructor(lastname, firstname, height){
        this.lastname = lastname;
        this.firstname = firstname
        this.height = height
    }

    info(){
        return `Person: lastname: ${this.lastname}, firstname=${this.firstname}`
    }
}

class Student extends Person{
    constructor(lastname, firstname, height, university){
        super(lastname, firstname, height)
        this.university = university
    }

}
export {Person, Student}