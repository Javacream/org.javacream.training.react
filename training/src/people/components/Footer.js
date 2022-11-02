import './Footer.css';
import ClockClassComponent from '../../util/ClockClassComponent';
import ClockFunctionalComponent from '../../util/ClockFunctionalComponent';
import { company} from '../PeopleApplicationContext'
function Footer() {
  return (
    <>
      {company}
      <ClockClassComponent />
      <ClockFunctionalComponent />
    </>
  );
}
export default Footer;
