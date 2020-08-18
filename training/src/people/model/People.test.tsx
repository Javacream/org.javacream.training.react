import {PeopleModel} from './People'

describe ('PeopleModel manages people', () => {
  let peopleModel:PeopleModel

  beforeEach(() => {
    peopleModel = new PeopleModel()
    peopleModel.create("Sawitzki", "Rainer", 'm', 183)
    peopleModel.create("Fabricius", "Carola", 'f', 176)
    peopleModel.create("Sawitzki", "Klaus", 'm', 181)
    });

  it ('all people lenght = 3', () => {
    const allPeople = peopleModel.findAll()
    expect(allPeople.length).toBe(3)
  })
  it ('person with id 1 equals Sawitzki', () => {
    const sawitzki = peopleModel.findById(1)
    expect(sawitzki.lastname).toBe("Sawitzki")
  })
  it ('delete works', () => {
    peopleModel.deleteById(1)
    expect(peopleModel.findAll().length).toBe(2)
  })

});