import React, { useState } from "react";
import PersonComponent from './PersonComponent'
import {peopleModel} from './PeopleApplicationContext'
export default function PersonSearchComponent() {
  const [id, setId] = useState(0);
  const [person, updatePerson] = useState()
  const handleSubmit = (evt:any) => {
      evt.preventDefault();
      let person = peopleModel.findPersonById(id)
      updatePerson(person)
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>
        Enter ID:
        <input
          type="text"
          value={id}
          onChange={e => setId(Number(e.target.value))}
        />
      </label>
      <input type="submit" value="Search" />
    </form>
    <PersonComponent person={person} detail={false} className="left"/>
    </>
  );
}