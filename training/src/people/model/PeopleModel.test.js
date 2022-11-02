import {Person, PeopleModel} from './People'

describe ('people manages persons', () => {
    let people = new PeopleModel()
    people.create("Sawitzki", "Rainer", 183, 'm')
    people.create("Fabricius", "Carola", 176, 'f')
    people.create("Sawitzki", "Klaus", 181, 'm')
  
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
  
  });