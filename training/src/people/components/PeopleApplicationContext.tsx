import PeopleController from "../controller/PeopleController";
import { Person } from "../model/PeopleModel";

export const peopleController = new PeopleController()
export const config = {
    header: "__ P E O P L E __", 
    company: "Javacream"
}

export const profile:Person = {id: 42, lastname:"Mustermann", firstname:"Hans", gender:"m", height: 122}

