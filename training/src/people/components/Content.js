import PersonInputFormComponent from "./PersonInputFormComponent";
import PeopleListComponent from "./PeopleListComponent";
import ServerPeopleListComponent from "./ServerPeopleListComponent";
import NavigationComponent from "./NavigationComponent";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

function Content() {
    return (
<BrowserRouter>
            <NavigationComponent />
            <hr />       
            <Switch>
                    <Route path='/people' render={(props) => <PeopleListComponent {...props} />} />    
                    <Route path='/peopleInput' render={(props) => <PersonInputFormComponent {...props}  />}/>    
                    <Route path='/peopleFromServer' component={ServerPeopleListComponent}/>    
                </Switch>
           </BrowserRouter>
        )
  }
  
  export default Content;
  