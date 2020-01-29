import '@testing-library/jest-dom/extend-expect';
import PeopleController from './PeopleController'
test('searching a person', async () => {
    let controller = new PeopleController()
    //controller.findById(1).then((person) => {expect(person.lastname).toBe("Sawitzki")})
    let person = await controller.findById(1)
    expect(person.lastname).toBe("Sawitzki")

});

test('searching all people', async () => {
    let controller = new PeopleController()
    let people = await controller.allPeople()
    expect(people.length).toBe(10)

});
