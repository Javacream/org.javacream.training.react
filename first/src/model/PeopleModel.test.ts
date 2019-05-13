import {Person, peopleModel} from './PeopleModel'

it('crud', () =>{
    peopleModel.add({lastname: "Sawitzki", firstname:"Rainer", height:183, id:100})
    peopleModel.add({lastname: "Sawitzki", firstname:"Klaus", height:181, id:101})
    peopleModel.add({lastname: "Mustermann", firstname:"Werner", height:203, id:102})
    peopleModel.add({lastname: "Emil", firstname:"Hugo", height:152, id:103})

    let person = peopleModel.personOf(102)
    expect(person.lastname).toBe("Mustermann")
    let person2 = peopleModel.personOf(202)
    expect(person2).toBeUndefined()


})