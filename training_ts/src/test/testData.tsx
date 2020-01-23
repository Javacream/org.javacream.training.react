import {PersonClass} from '../people/model/People'

export const testPerson = new PersonClass(815, "Mustermann", "Hans", "m");
export const testPeople = [
    testPerson,
    new PersonClass(816, "Mustermann", "Hanna", "f"),
    new PersonClass(817, "Meier", "Franz", "m"),
    new PersonClass(818, "Sawitzki", "Rainer", "m"),
    new PersonClass(819, "Sawitzki", "Helga", "f"),

]