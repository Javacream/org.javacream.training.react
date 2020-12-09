import peopleController from './PeopleController'

describe ('PeopleController manages people', () => {

    it ('all people lenght = 10', async () => {
    const allPeople = await peopleController.findAll()
    expect(allPeople.length).toBe(10)
  })
  it ('person 6 has lastname Pausenkurt', async () => {
    const person = await peopleController.findById(6)
    expect(person.lastname).toBe("Pausenkurt")
  })

});