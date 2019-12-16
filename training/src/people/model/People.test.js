import {People} from './People'

describe ('people manages persons', () => {
  let people = new People()
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
    expect(allPeopleInfos[0]).toBe("Person[0]: lastname=Sawitzki, firstname=Rainer, height=183, gender=m")
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