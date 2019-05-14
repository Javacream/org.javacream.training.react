import {Person, PeopleModel, PersonClass} from '../model/PeopleModel'
import ClockComponent from '../components/ClockComponent';

class ApplicationContext {
    currentUser:Person= {lastname: "Sawitzki", firstname:"Rainer", id:42}
    peopleModel: PeopleModel = new PeopleModel()
    clockComponent?:ClockComponent
    samplePerson = new PersonClass(42, "Mustermann", "Hans")
}

export * from '../model/PeopleModel'
export let applicationContext = new ApplicationContext()

setTimeout(() => {applicationContext.currentUser.lastname = "Meier"; console.log(applicationContext.currentUser.lastname )}, 5000);