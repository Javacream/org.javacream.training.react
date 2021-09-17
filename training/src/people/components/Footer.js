import { company } from "../PeopleApplicationContext";
import ClockComponent from "./ClockComponent";
import FunctionalClockComponent from "./FunctionalClockComponent";
import LogComponent from '../../util/LogComponent' 
function Footer() {
    return (
      <>
      <p>{company}</p>   
      <ClockComponent /> 
      <LogComponent />
      </>
    );
  }
  
  export default Footer;
  