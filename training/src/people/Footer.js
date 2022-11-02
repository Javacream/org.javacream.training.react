import './Footer.css';
import ClockClassComponent from '../util/ClockClassComponent';
import { company} from './PeopleApplicationContext'
function Footer() {
  return (
    <div >
      {company}
      <ClockClassComponent />
    </div>
  );
}
export default Footer;
