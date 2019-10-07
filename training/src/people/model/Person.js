export class Person{
    constructor(id, lastname, firstname, height, gender){
        this.id = id
        this.lastname = lastname
        this.firstname = firstname
        this.height = height 
        this.gender = gender
    }

    info(){
        return `Person[${this.id}]: lastname=${this.lastname}, firstname=${this.firstname}, height=${this.height}, gender=${this.gender}`
    }
}