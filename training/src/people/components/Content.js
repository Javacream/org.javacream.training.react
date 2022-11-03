import './Content.css';
import PeopleList from './PeopleList';
import CreatePersonComponent from './CreatePersonComponent';
import DeletePersonComponent from './DeletePersonComponent';
function Content() {
  return (
    <div >
      <PeopleList />
      <hr />
      <CreatePersonComponent />
      <hr />
      <DeletePersonComponent />
    </div>
  );
}
export default Content;
