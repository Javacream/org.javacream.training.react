class Person{
  constructor(personId, lastname, firstname, gender, height){
    this.personId = personId
    this.lastname = lastname
    this.firstname = firstname
    this.gender = gender
    this.height = height
  }

}


function createPeople(){
  let people = new Array()
  people.push(new Person(1, "Sawitzki", "Rainer", "m", 183))
  people.push(new Person(2, "Metzger", "Franz", "m", 193))
  people.push(new Person(3, "Schneider", "Maria", "w", 166))
  people.push(new Person(4, "Meier", "Hanna", "w", 177))
  return people

}
