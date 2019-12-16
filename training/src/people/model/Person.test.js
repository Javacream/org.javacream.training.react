import {Person} from './Person'

it('creates people', () => {
  let p1 = new Person(1, "Sawitzki", "Rainer", 183, 'm')
  let p2 = new Person(2, "Sawitzki", "Klaus", 181, 'm')
  expect(p1.lastname).toBe("Sawitzki")
  expect(p1.info()).toBe("Person[1]: lastname=Sawitzki, firstname=Rainer, height=183, gender=m")
});