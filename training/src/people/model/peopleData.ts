import { PeopleModel, Person } from "./people";

export const profile:Person = {id: 1000, lastname:'Mustermann', firstname:'Hans', gender:'m', height:199}

export const peopleModel = new PeopleModel()

peopleModel.create("Sawitzki", "Rainer")
peopleModel.create("Sawitzki", "Klaus")
peopleModel.create("Meier", "Hanna")

setTimeout(() => {
    profile.lastname = "Meuer"
    console.log("+***** + " + profile.lastname)
}, 5000)
