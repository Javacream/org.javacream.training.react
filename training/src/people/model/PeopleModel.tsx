import {publish} from 'pubsub-js'
export interface Person{
	id:number
	lastname:string
	firstname:string
	gender:string
	height:number
}
 export class PeopleModel{
    counter = 0
    peopleMap:Map<number, Person> = new Map()
    create(lastname:string, firstname:string, gender="x", height=100):number {
        const id = this.counter++
        this.peopleMap.set(id, {id, lastname, firstname, gender, height})
        publish("log", `create person with ${id}` )
        return id
    }
	findPersonById(id:number){
        return this.peopleMap.get(id)
    }
    update(id:number, height:number){
        let person = this.peopleMap.get(id)
        if (person){
            person.height = height
        }
    }
    
	deleteById(id:number){
        this.peopleMap.delete(id)
    }

    findAll(){
        return Array.from(this.peopleMap.values())
    }

 }