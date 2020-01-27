export class PeopleModel{

    people: Map<number, Person>
    constructor(){
        this.people = new Map()
    }
    add(p:Person):void{
        this.people.set(p.id, p)
    }

    findById(id: number){
        return this.people.get(id)
    }

}

export interface Person {
    id: number
    lastname:string
    firstname: string
    gender: string
    height: number
}

export class PersonClass implements Person{
    constructor(readonly id: number, public lastname: string, readonly firstname: string, readonly  gender:string, readonly  height:number){}
    info():string{
        return this.firstname + " " + this.lastname
    }
}

