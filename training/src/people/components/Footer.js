import { company } from "../PeopleApplicationContext";
import ClockComponent from "./ClockComponent";
import FunctionalClockComponent from "./FunctionalClockComponent";

function Footer() {
    return (
      <>
      <p>{company}</p>   
      <ClockComponent /> 
      <FunctionalClockComponent />
      </>
    );
  }
  
  export default Footer;
  