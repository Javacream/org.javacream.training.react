//Jest-Framework
import {Person} from './People'

test('Person works!', () =>  {
    let p = new Person("Sawitzki", "Rainer", 183)
    expect(p.lastname).toBe("Sawitzki")

})