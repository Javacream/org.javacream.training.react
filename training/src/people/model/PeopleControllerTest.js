import {PeopleController} from './PeopleController'

describe ('people manages persons', () => {
  let people = new PeopleController()
  people.add("Sawitzki", "Rainer", 183, 'm')
  people.add("Fabricius", "Carola", 176, 'f')
  people.add("Sawitzki", "Klaus", 181, 'm')

  it ('all people lenght = 3', () => {
    const allPeople = people.allPeople()
    expect(allPeople.length).toBe(3)
  })

  it ('all people length = 3', () => {
    const allPeopleInfos = people.allInfos()
    expect(allPeopleInfos.length).toBe(3)
  })
  it ('personinfo[0] is Rainer Sawitzki', () => {
    const allPeopleInfos = people.allInfos()
  })
  it ('people has one female', () => {
    const allFemales = people.allPeopleBy('f')
    expect(allFemales.length).toBe(1)
  })
  it ('people has two males', () => {
    const allMales = people.allPeopleBy('m')
    expect(allMales.length).toBe(2)
  })

});