export interface Person{
    lastname: String
    firstname: String
    personId: Number
}

export class PersonClass implements Person{
    lastname: String
    firstname: String
    personId: Number

    constructor(personId: number, lastname: String, firstname: String){
        this.lastname = lastname;
        this.firstname = lastname;
        this.personId = personId;
    }
}


export let samplePerson = new PersonClass(42, "Mustermann", "Hans");