import { PeopleModel } from "../model/PeopleModel";

export const peopleModel = new PeopleModel()
export const config = {
    header: "__ P E O P L E __", 
    company: "Javacream"
}

const profileId = peopleModel.create("Mustermann", "Hans", "m")
export const profile = peopleModel.findPersonById(profileId)