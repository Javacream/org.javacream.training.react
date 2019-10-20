import {People} from '../model/People'
import { Person } from '../model/Person';
let peopleData = new People()
peopleData.add("Sawitzki", "Rainer", 183, 'm')
peopleData.add("Fabricius", "Carola", 176, 'f')
peopleData.add("Sawitzki", "Klaus", 181, 'm')
let userProfile = new Person(42, "Meier", "Hans", 177, 'm')

export {peopleData, userProfile}