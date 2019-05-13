export class PersonClass implements Person{
    constructor(readonly lastname:string, readonly firstname:string){
        this.lastname = lastname
        this.firstname = firstname
    }

    infoMethod = () => {
        return "Hello, my name is ${this.lastname}"
    }
}

export interface Person {
    lastname:string

}

export interface Person{
    firstname:string

}

export let f: ()=>string = () => {return "Hugo"}