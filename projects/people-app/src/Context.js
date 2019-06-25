import {PeopleModel} from './model/PeopleModel'
import { Person } from './model/Person';

let context = {}

context.peopleModel = new PeopleModel()
context.samplePerson = new Person(42, "Sawitzki", "Rainer")
context.samplePeople = [context.samplePerson, new Person(43, "Mustermann", "Hans"), new Person(4711, "Metzger", "Georg") ]

setTimeout(
    function(){
    context.samplePerson.lastname = "Meier"
    if (context.peopleComponent){
        context.peopleComponent.setState({people: context.samplePeople})
    }
    console.log("CHANGED: " + context.samplePerson.lastname)
}, 1000)

export {context}