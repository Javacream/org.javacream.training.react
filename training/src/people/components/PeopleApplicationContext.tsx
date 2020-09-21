import { PeopleModel } from "../model/PeopleModel";

export const peopleModel = new PeopleModel()
export const config = {
    header: "__ P E O P L E __", 
    company: "Javacream"
}

const profileId = peopleModel.create("Mustermann", "Hans", "m")
export const profile = peopleModel.findPersonById(profileId)
peopleModel.create("Sawitzki", "Rainer", "m", 183)
peopleModel.create("Polt", "Gerhard", "m", 191)
peopleModel.create("Müller", "Hanna", "f", 176)

setTimeout(() => {
    peopleModel.create("Schnieder", "Gang")
    console.log(peopleModel.findAll())
}, 5000)
