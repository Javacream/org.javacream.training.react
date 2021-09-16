import { applicationTitle,user } from "../PeopleApplicationContext";
import PersonComponent from './PersonComponent'
function Header() {
    return (
      <>
      <h1>{applicationTitle}</h1>
      <PersonComponent person={user} detail={false} />
      </>
    );
  }
  
  export default Header;
  