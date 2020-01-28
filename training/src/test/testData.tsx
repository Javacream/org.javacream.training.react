import { PersonClass } from "../people/model/People"

export const testHeaderText = "P E O P L E"
export const testContentText = "nothing yet..."
export const prototypePerson = new PersonClass(815, "Mustermann", "Hans", 'm', 177)
export const testPeople = [
    prototypePerson,
    new PersonClass(816, "Mustermann", "Hanna", "f"),
    new PersonClass(817, "Meier", "Franz", "m"),
    new PersonClass(818, "Sawitzki", "Rainer", "m"),
    new PersonClass(819, "Sawitzki", "Helga", "f"),
]
/*
setTimeout(() => {
    prototypePerson.firstname = "CHANGED BY TIMEOUT"
    console.log(prototypePerson.firstname)
}, 2000)
*/