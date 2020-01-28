import React, {PureComponent} from 'react';
import { Person } from '../model/People';
import PersonComponent from './PersonComponent';

class PeopleListComponent extends PureComponent<{people: Array<Person>, deletePersonHandler?: (id: number) => void}, {}>{

    render(){
        let htmlPeople = this.props.people.map( (p) => (<li key={p.id}><PersonComponent  person={p} detail={true} deletePersonHandler={this.props.deletePersonHandler}/></li>))
        return (
                    <div className="content">
                        <h3>List of local people</h3>
                        <ol>{htmlPeople}</ol>
                    </div>    
                )
    }

}

export default PeopleListComponent