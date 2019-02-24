import {Person} from './People'
const samplePerson = new Person(1, "Sawitzki", "Rainer")
const samplePeople = [samplePerson, new Person(2, "Sawitzki", "Klaus"), new Person(3, "Mustermann", "Rainer"), new Person(4, "Hans", "Hoffmann")]

let counter = 0
setInterval(function(){
    samplePerson.lastname = "Sawitzki "  + counter++
//    console.log(samplePerson.lastname)
}, 2000)

export {samplePerson, samplePeople}