import {Person, PeopleModel} from './PeopleModel'

describe("peoplemodel manages people", () => {
    let pm = new PeopleModel()
    pm.create("Sawitzki", "Rainer", 183, 'm')
    pm.create("Musterfrau", "Hannah", 199, 'f')
    pm.create("Schneider", "Andrea", 183, 'd')

    it('all people length = 3', () => {
        expect (pm.allPeople().length).toBe(3)
    }
    )
}


)