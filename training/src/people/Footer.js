import './Footer.css';
import ClockClassComponent from '../util/ClockClassComponent';
import ClockFunctionalComponent from '../util/ClockFunctionalComponent';
import { company} from './PeopleApplicationContext'
function Footer() {
  return (
    <div >
      {company}
      <div>Class: <ClockClassComponent /></div>
      <div>Functional: <ClockFunctionalComponent /></div>
    </div>
  );
}
export default Footer;
