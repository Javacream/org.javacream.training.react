import {Person, Student} from  './Person'

describe('test the people model', () => {
    it('creates person and lastname is checked', () => {
        const expected_lastname = "Sawitzki"
        let p1 = new Person(expected_lastname, "Rainer", 183)
        expect(p1.lastname).toBe(expected_lastname);
    })
    it('creates student and lastname is checked', () => {
        const expected_lastname = "Sawitzki"
        const expected_university = "LMU"
        let p1 = new Student(expected_lastname, "Rainer", 183, expected_university)
        expect(p1.lastname).toBe(expected_lastname);
        expect(p1.university).toBe(expected_university);
    })

})

