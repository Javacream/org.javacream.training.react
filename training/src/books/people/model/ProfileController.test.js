import getDefaultProfile from './ProfileController'
describe('client server', () => {
    it ('does a successful server request', () => {
        const person = getDefaultProfile()
        person.then((person) => console.log(person.lastname))
    })
    it ('does a successful server request', async () => {
        const person = await getDefaultProfile()
        console.log(person.lastname)
    })
    
})

