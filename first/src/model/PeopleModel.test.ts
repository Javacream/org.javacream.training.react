import {Person, applicationContext} from '../context/ApplicationContext'

it('crud', () =>{
    applicationContext.peopleModel.add({lastname: "Sawitzki", firstname:"Rainer", height:183, id:100})
    applicationContext.peopleModel.add({lastname: "Sawitzki", firstname:"Klaus", height:181, id:101})
    applicationContext.peopleModel.add({lastname: "Mustermann", firstname:"Werner", height:203, id:102})
    applicationContext.peopleModel.add({lastname: "Emil", firstname:"Hugo", height:152, id:103})

    let person = applicationContext.peopleModel.personOf(102)
    expect(person.lastname).toBe("Mustermann")
    let person2 = applicationContext.peopleModel.personOf(202)
    expect(person2).toBeUndefined()


})