import React from 'react';
import {PersonClass, Person, samplePerson} from '../model/People';
import {PersonComponent} from './PersonComponent';
import {PersonInfoComponent} from './PersonInfoComponent';
export let StatelessPersonSampleDataComponent = () => {
    let attributePerson1 = new PersonClass(9, "Musterfrau", "Hanna");
    let attributePerson2: Person = {id: 19, lastname: "Muster", firstname: "Han"}

    let people = new Array<PersonClass>()
    people.push(new PersonClass(1, "Sawitzki", "Rainer"))
    people.push(new PersonClass(2, "Sawitzki", "Klaus"))
    people.push(new PersonClass(3, "Metzger", "Georg"))
    people.push(new PersonClass(4, "Manz", "Franz"))
    people.push(new PersonClass(5, "Bonhammel", "Ortwin"))


    let peopleInfoHtml = people.map((p:PersonClass) =>
        <PersonInfoComponent key={p.id} person_info={p.info()} />)

    let peopleHtml = people.map((p:Person) =>
    <PersonComponent key={p.id} person={p}/>)

    let PeopleHtmlRenderer = () => {
      return (
          <div>
            <h3>People</h3>
            <div><ol>{peopleHtml}</ol></div>
          </div>
        )
    }
    let PeopleHtmlInfoRenderer = () => {
      return (
          <div>
          <h3>People Info</h3>
          <div><ul>{peopleInfoHtml}</ul></div>
          </div>
        )
    }
    return (
        <div>
            <PersonComponent person={samplePerson} />
            <PersonComponent person={attributePerson1}/>
            <PersonComponent person={attributePerson2} />
            <hr />
            <PeopleHtmlRenderer />
            <hr />
            <PeopleHtmlInfoRenderer />
        </div>
        );
}
