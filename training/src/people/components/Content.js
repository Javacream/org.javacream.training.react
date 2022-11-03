import './Content.css';
import PeopleList from './PeopleList';
import CreatePersonComponent from './CreatePersonComponent';
import DeletePersonComponent from './DeletePersonComponent';
import NavigationComponent from './NavigationComponent';
import { BrowserRouter } from 'react-router-dom';
import {Routes, Route} from 'react-router'
function Content() {
  return (
    <div >
      <BrowserRouter>
        <NavigationComponent />
        <hr />
        <Routes>
          <Route path="/"></Route>
          <Route path="/list" element={<PeopleList />}></Route>
          <Route path="/delete"  element={<DeletePersonComponent />}></Route>
          <Route path="/create"  element={<CreatePersonComponent />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default Content;
