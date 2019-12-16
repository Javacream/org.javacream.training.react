import {People} from '../model/People'
import { Person } from '../model/Person';

export const peopleData = new People()

peopleData.add("Sawitzki", "Rainer", 183, 'm')
peopleData.add("Musterfrau", "Hanna", 177, 'f')
peopleData.add("Schneider", "Hans", 155, 'm')

export const user = new Person(42, "Metzger", "Georg", 189, 'm')

