import PeopleController from './PeopleController'
it ('number of people in test server are 10', async () => {
    let peopleController = new PeopleController()
    const allPeople = await peopleController.loadPeople()
    expect(allPeople.length).toBe(10)
  })
