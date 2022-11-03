import './Content.css';
import PeopleList from './PeopleList';
import CreatePersonComponent from './CreatePersonComponent';
import DeletePersonComponent from './DeletePersonComponent';
import NavigationComponent from './NavigationComponent';
import { BrowserRouter } from 'react-router-dom';
import {Routes, Route} from 'react-router'
import CounterComponent from '../../demo/redux/components/CounterComponent';
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
          <Route path="/redux"  element={<CounterComponent />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default Content;
