import PeopleController from './PeopleController'
it ('all people lenght = 3', async () => {
    let peopleController = new PeopleController()
    const allPeople = await peopleController.loadPeople()
    expect(allPeople.length).toBe(10)
  })
