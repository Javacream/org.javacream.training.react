export interface Person{
	id:number
	lastname:string
	firstname:string
	gender:string
	height:number
}

/*
Klassen sind für Datenstrukturen eher unüblich
class PersonClass implements Person{
    constructor(readonly id:number, public lastname:string, readonly firstname:string, readonly gender:string, public height:number){}
}

let anotherPerson = new PersonClass(43, "Sawitzki", "Klaus", 'm', 184)

 */

 export class PeopleModel{
    counter = 0
    peopleMap:Map<number, Person> = new Map()
    create(lastname:string, firstname:string, gender="x", height=100):number {
        const id = this.counter++
        this.peopleMap.set(id, {id, lastname, firstname, gender, height})
        return id
    }
	findPersonById(id:number){
        return this.peopleMap.get(id)
    }
    update(id, height){
        let person = this.peopleMap.get(id)
        if (person){
            person.height = height
        }
    }
    
	deleteById(id:number){
        this.peopleMap.delete(id)
    }

 }