class Person{
  constructor(id, lastname, firstname){
    this.personId = id
    this.lastname = lastname
    this.firstname = firstname
  }


  info(){
    if (this.partner){
      return (`Hello, my name is ${this.firstname}  ${this.lastname} married with ${this.partner.firstname} ${this.partner.lastname}`)
    }
    else{
      return (`Hello, my name is ${this.firstname}  ${this.lastname}`)
    }
  }

  marry(partner){
    if ((this != partner) && (!this.partner) && (!partner.partner)){
      this.partner = partner
      partner.partner = this
    }else{
      console.log("marriage not possible")
    }
  }

  divorce(){
    if (this.partner){
      delete this.partner.partner
      delete this.partner
    }else{
      console.log("divorce not possible")
    }
  }
}

class Student extends Person{

  constructor(id, lastname, firstname, university){
    super(id, lastname, firstname)
    this.university = university
  }

  info(){
    return super.info() + `, studying at ${this.university}`
  }

  study(){
    console.log(`studying at ${this.university} ...`)
  }
}

class Worker extends Person{

  constructor(id, lastname, firstname, company){
    super(id, lastname, firstname)
    this.company = company
  }

  info(){
    return super.info() + `, working at ${this.company}`
  }

  work(){
    console.log(`working at ${this.company} ...`)
  }
}

class PeopleModel{
  constructor(){
    this.data = new Map()
  }

  add(person){
    this.data.set(person.personId, person)
  }

  people(){
    return Array.from(this.data.values())
  }

  update(person){
    this.data.set(person.personId, person)
  }

  personOf(personId){
    return this.data.get(personId)
  }
}
