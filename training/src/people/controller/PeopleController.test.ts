import peopleController from './PeopleController'

describe ('PeopleController manages people', () => {

    it ('all people lenght = 3', async () => {
    const allPeople = await peopleController.findAll()
    expect(allPeople.length).toBe(10)
  })

});