import './Content.css';
import PeopleList from './PeopleList';
import CreatePersonComponent from './CreatePersonComponent';
import DeletePersonComponent from './DeletePersonComponent';
import { useState } from 'react';
import { peopleModel } from '../PeopleApplicationContext';
function Content() {
  let [peopleList, updateList] = useState(peopleModel.allPeople())
  let notify = () => {
    updateList(peopleModel.allPeople())
  }
  return (
    <div > 
      <PeopleList people={peopleList}/>
      <hr />
      <CreatePersonComponent notifyFunction={notify}/>
      <hr />
      <DeletePersonComponent />
    </div>
  );
}
export default Content;
