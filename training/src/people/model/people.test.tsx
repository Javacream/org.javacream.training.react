import {PersonNotTypicalTypeScript, PersonMaybeTypeScript, Person, PersonType} from './people'


test('create a person using constructor', () => {
    let person = new PersonNotTypicalTypeScript(42, "Mustermann", "Hans", "m", 199)
})

test('create a person using constructor modifier', () => {
    let person = new PersonMaybeTypeScript(42, "Mustermann", "Hans", "m", 199)
})


test('create a person using data', () => {
    let personData = {id: 42, lastname:"Sawitzki", firstname: "Rainer", gender:"m", height:183}
    let person = new PersonMaybeTypeScript(personData.id, personData.lastname, personData.firstname, personData.gender, personData.height)
})

test('create a person using interface', () => {
    let person:Person = {id: 42, lastname:"Sawitzki", firstname: "Rainer", gender:"m", height:183}
})

test('create a person using type', () => {
    let person:PersonType = {id: 42, lastname:"Sawitzki", firstname: "Rainer", gender:"m", height:183}
})