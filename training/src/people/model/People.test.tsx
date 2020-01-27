import {PeopleModel, Person, PersonClass} from './People'
import '@testing-library/jest-dom/extend-expect';


test('person creation works', () => {
    let p: PersonClass = new PersonClass(42, "Sawitzki", "rainer", "m", 183)
    let p2:Person = {id:42, lastname: "Sawitzki", firstname: "Rainer", gender: "m", height: 183}
    expect(p.lastname).toBe("Sawitzki");
});
  