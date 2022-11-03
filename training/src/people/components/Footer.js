import './Footer.css';
import ClockClassComponent from '../../util/ClockClassComponent';
import ClockFunctionalComponent from '../../util/ClockFunctionalComponent';
import LogComponent from '../../util/LogComponent';
import { company} from '../PeopleApplicationContext'
function Footer() {
  return (
    <>
      {company}
      <ClockClassComponent />
      <ClockFunctionalComponent />
      <LogComponent />
    </>
  );
}
export default Footer;
