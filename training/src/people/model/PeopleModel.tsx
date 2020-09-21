interface Person{
	id:number
	lastname:string
	firstname:string
	gender:string
	height:number
}

let aPerson:Person = {id:42, lastname:"Sawitzki", firstname:"Rainer", gender: 'm', height:183};

/*
Klassen sind für Datenstrukturen eher unüblich
class PersonClass implements Person{
    constructor(readonly id:number, public lastname:string, readonly firstname:string, readonly gender:string, public height:number){}
}

let anotherPerson = new PersonClass(43, "Sawitzki", "Klaus", 'm', 184)

 */

 class PeopleModel{
    counter = 0
    peopleMap:Map<number, Person> = new Map()
    create(lastname:string, firstname:string):number {
        return this.counter++
    }
	findPersonById(id:number){
        return this.peopleMap.get(id)
    }
	update(id, height)
	deleteById(id:number)

 }