export class PersonNotTypicalTypeScript implements Person{
    id:number
    lastname:string
    firstname:string
    gender:string
    height:number

    constructor(id: number, lastname:string, firstname:string, gender: string, height:number){
        this.id = id;
        this.lastname = lastname;
        this.firstname = firstname
        this.gender = gender
        this.height = height
    }
    sayHello(){
        return this.firstname + " " + this.lastname
    }
}


export class PersonMaybeTypeScript implements Person{
    constructor(readonly id: number, public lastname:string, readonly firstname:string, readonly gender: string, public height:number){}
    sayHello(){
        return this.firstname + " " + this.lastname
    }
}

export interface Person {

    id:number
    lastname:string
    firstname:string
    gender:string
    height:number

}

export type PersonType = {

    id:number
    lastname:string
    firstname:string
    gender:string
    height:number
    
}