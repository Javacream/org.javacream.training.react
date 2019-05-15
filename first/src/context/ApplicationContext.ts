import {Person, PeopleModel, PersonClass} from '../model/PeopleModel'
import ClockComponent from '../components/ClockComponent';
import EmployeeController from '../controller/EmployeeController'
class ApplicationContext {
    currentUser:Person= {lastname: "Sawitzki", firstname:"Rainer", id:42}
    peopleModel: PeopleModel = new PeopleModel()
    clockComponent?:ClockComponent
    stopFunction?:() => void
    samplePerson = new PersonClass(42, "Mustermann", "Hans")
    samplePeople = new Array<PersonClass>()
    employeeController = new EmployeeController();
    constructor(){
        this.samplePeople.push(new PersonClass(1, "Sawitzki", "Rainer"))
        this.samplePeople.push(new PersonClass(2, "Sawitzki", "Klaus"))
        this.samplePeople.push(new PersonClass(3, "Metzger", "Georg"))
        this.samplePeople.push(new PersonClass(4, "Manz", "Franz"))
        this.samplePeople.push(new PersonClass(5, "Bonhammel", "Ortwin"))
    

    }
}

export * from '../model/PeopleModel'
export let applicationContext = new ApplicationContext()

setTimeout(() => {applicationContext.currentUser.lastname = "Meier"; console.log(applicationContext.currentUser.lastname )}, 5000);