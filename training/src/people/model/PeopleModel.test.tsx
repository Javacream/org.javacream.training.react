import {PeopleModel, Person} from './PeopleModel'

let peopleModel:PeopleModel
beforeEach(() => {
    peopleModel = new PeopleModel()
  });
  
test('creates a person', () => {
    let personId = peopleModel.create("Sawitzki", "Rainer")
    expect(personId).toBeDefined()
});

test('finds a created person', () => {
    let personId = peopleModel.create("Sawitzki", "Rainer")
    let searchedPerson = peopleModel.findPersonById(personId)
    expect(searchedPerson).toBeDefined()
    expect(searchedPerson.lastname).toBe("Sawitzki")
    expect(searchedPerson.firstname).toBe("Rainer")
    expect(searchedPerson.height).toBe(100)
    expect(searchedPerson.gender).toBe("x")
});

test('updates height person', () => {
    let personId = peopleModel.create("Sawitzki", "Rainer")
    peopleModel.update(personId, 183)
    let searchedPerson = peopleModel.findPersonById(personId)
    expect(searchedPerson.height).toBe(183)
});

test('deletes a person', () => {
    let personId = peopleModel.create("Sawitzki", "Rainer")
    peopleModel.deleteById(personId)
    let searchedPerson = peopleModel.findPersonById(personId)
    expect(searchedPerson).toBeUndefined()
});


  