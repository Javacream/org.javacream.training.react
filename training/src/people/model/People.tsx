export interface Person{
	lastname:string
	firstname:string
	gender:string
    height:number
    id:number
}

export class PeopleModel{
	counter = 0
    data: Map<Number, Person>
    constructor(){
      this.data = new Map()
    }
  
    create(lastname:string, firstname:string, 	gender:string, height:number){
	  this.counter++
      const id = this.counter
      this.data.set(id, {id, lastname, firstname, gender, height}) //{short for id: id, lastname: lastname}
    }
  
    findAll(): Array<Person>{
      return Array.from(this.data.values())
    }
  
    update(person:Person){
      this.data.set(person.id, person)
    }
  
    findById(id:number):Person|undefined{
      return this.data.get(id)
    }
    deleteById(id:number):void{
		this.data.delete(id)
    }

	findByGender(gender:string){
		return Array.from(this.data.values()).filter(p => p.gender === gender);
	}
	peopleNames(){
		return Array.from(this.data.values()).map(p => `${p.firstname} ${p.lastname}`);
	}
}
